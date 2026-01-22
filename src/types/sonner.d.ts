declare module 'sonner' {
  import { ReactNode, ComponentProps } from 'react'

  export interface ToasterProps extends ComponentProps<'div'> {
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
    richColors?: boolean
    theme?: 'light' | 'dark' | 'system'
  }

  export const Toaster: React.FC<ToasterProps>
}
