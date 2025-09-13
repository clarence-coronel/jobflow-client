import { create } from "zustand";

// Placeholder slice types
export interface UserState {
  user: { id: string; name: string } | null;
  setUser: (user: { id: string; name: string } | null) => void;
}

export interface UIState {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// Combined store type
export type StoreState = UserState & UIState;

// Placeholder store
export const useStore = create<StoreState>()((set, get) => ({
  // User slice placeholder
  user: null,
  setUser: (user) => set({ user }),

  // UI slice placeholder
  theme: "light",
  toggleTheme: () => set({ theme: get().theme === "light" ? "dark" : "light" }),
}));
