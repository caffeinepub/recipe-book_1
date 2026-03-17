import { createContext, useContext, useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  bio: string;
  password: string;
}

interface AuthContextType {
  user: Omit<User, "password"> | null;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
  updateProfile: (name: string, email: string, bio: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const STORAGE_KEY = "recipebook_user";
const USERS_KEY = "recipebook_users";

function getStoredUsers(): User[] {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function saveUsers(users: User[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getActiveUser(): Omit<User, "password"> | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Omit<User, "password"> | null>(
    getActiveUser,
  );

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const login = (email: string, password: string) => {
    const users = getStoredUsers();
    const found = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password,
    );
    if (!found) throw new Error("Invalid email or password");
    const { password: _pw, ...safeUser } = found;
    setUser(safeUser);
  };

  const register = (name: string, email: string, password: string) => {
    const users = getStoredUsers();
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error("An account with this email already exists");
    }
    const newUser: User = { name, email, bio: "", password };
    saveUsers([...users, newUser]);
    const { password: _pw, ...safeUser } = newUser;
    setUser(safeUser);
  };

  const logout = () => setUser(null);

  const updateProfile = (name: string, email: string, bio: string) => {
    const users = getStoredUsers();
    const updated = users.map((u) =>
      u.email.toLowerCase() === (user?.email ?? "").toLowerCase()
        ? { ...u, name, email, bio }
        : u,
    );
    saveUsers(updated);
    setUser((prev) => (prev ? { ...prev, name, email, bio } : prev));
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
