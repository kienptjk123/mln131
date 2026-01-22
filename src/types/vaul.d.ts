declare module 'vaul' {
  import { ReactNode, ComponentProps } from 'react'

  export interface DrawerProps {
    open?: boolean
    onOpenChange?: (open: boolean) => void
    children?: ReactNode
    [key: string]: any
  }

  export const Drawer: React.FC<DrawerProps> & {
    Root: React.FC<DrawerProps>
    Trigger: React.FC<ComponentProps<'button'>>
    Portal: React.FC<{ children?: ReactNode }>
    Close: React.FC<ComponentProps<'button'>>
    Overlay: React.FC<ComponentProps<'div'>>
    Content: React.FC<ComponentProps<'div'>>
    Title: React.FC<ComponentProps<'h2'>>
    Description: React.FC<ComponentProps<'p'>>
  }
}

