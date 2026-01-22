declare module 'next-themes' {
  export interface UseThemeReturn {
    theme?: string
    setTheme: (theme: string) => void
    resolvedTheme?: string
    themes?: string[]
    systemTheme?: 'light' | 'dark'
  }

  export function useTheme(): UseThemeReturn
}

