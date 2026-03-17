import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "./AuthContext";

interface FavoriteContextType {
  favoritedIds: string[];
  toggleFavorite: (id: string) => void;
  isFavorited: (id: string) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | null>(null);

function getKey(email: string) {
  return `recipebook_favorites_${email}`;
}

function loadFavorites(email: string): string[] {
  try {
    return JSON.parse(localStorage.getItem(getKey(email)) ?? "[]");
  } catch {
    return [];
  }
}

export function FavoriteProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const email = user?.email ?? null;

  const [favoritedIds, setFavoritedIds] = useState<string[]>(() =>
    email ? loadFavorites(email) : [],
  );

  useEffect(() => {
    setFavoritedIds(email ? loadFavorites(email) : []);
  }, [email]);

  const toggleFavorite = useCallback(
    (id: string) => {
      if (!email) return;
      setFavoritedIds((prev) => {
        const next = prev.includes(id)
          ? prev.filter((f) => f !== id)
          : [...prev, id];
        localStorage.setItem(getKey(email), JSON.stringify(next));
        return next;
      });
    },
    [email],
  );

  const isFavorited = useCallback(
    (id: string) => (email ? favoritedIds.includes(id) : false),
    [email, favoritedIds],
  );

  return (
    <FavoriteContext.Provider
      value={{ favoritedIds, toggleFavorite, isFavorited }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoriteContext);
  if (!ctx)
    throw new Error("useFavorites must be used within FavoriteProvider");
  return ctx;
}
