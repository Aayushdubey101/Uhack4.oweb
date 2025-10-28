import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = 'light',
}: ThemeProviderProps) {
  // Initialize from localStorage or OS preference, falling back to defaultTheme
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      if (typeof window === 'undefined') return defaultTheme;
      const stored = window.localStorage.getItem('theme');
      if (stored === 'light') return stored;
      return 'light';
    } catch {
      return defaultTheme;
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    try {
      window.localStorage.setItem('theme', theme);
    } catch {
      // ignore storage errors (e.g., privacy mode)
    }
  }, [theme]);

  const toggleTheme = () => {
    // No toggle since only light mode
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};