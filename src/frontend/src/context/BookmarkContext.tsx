import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "./AuthContext";

interface BookmarkContextType {
  bookmarkedIds: string[];
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | null>(null);

function getKey(email: string) {
  return `recipebook_bookmarks_${email}`;
}

function loadBookmarks(email: string): string[] {
  try {
    return JSON.parse(localStorage.getItem(getKey(email)) ?? "[]");
  } catch {
    return [];
  }
}

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const email = user?.email ?? null;

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() =>
    email ? loadBookmarks(email) : [],
  );

  // Reload bookmarks when user changes (login/logout)
  useEffect(() => {
    setBookmarkedIds(email ? loadBookmarks(email) : []);
  }, [email]);

  const toggleBookmark = useCallback(
    (id: string) => {
      if (!email) return;
      setBookmarkedIds((prev) => {
        const next = prev.includes(id)
          ? prev.filter((b) => b !== id)
          : [...prev, id];
        localStorage.setItem(getKey(email), JSON.stringify(next));
        return next;
      });
    },
    [email],
  );

  const isBookmarked = useCallback(
    (id: string) => (email ? bookmarkedIds.includes(id) : false),
    [email, bookmarkedIds],
  );

  return (
    <BookmarkContext.Provider
      value={{ bookmarkedIds, toggleBookmark, isBookmarked }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const ctx = useContext(BookmarkContext);
  if (!ctx)
    throw new Error("useBookmarks must be used within BookmarkProvider");
  return ctx;
}
