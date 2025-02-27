'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { AuthProvider } from '@/lib/contexts/AuthContext';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        {children}
      </AuthProvider>
    </NextThemeProvider>
  );
} 