import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: null | {
    id: string;
    name: string;
    email: string;
    role: 'developer' | 'user';
    treesSaved: number;
  };
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (email, password) => {
    // Simulate API call
    const mockUser = {
      id: '1',
      name: 'John Doe',
      email,
      role: 'developer' as const,
      treesSaved: 42,
    };
    set({ isAuthenticated: true, user: mockUser });
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}));