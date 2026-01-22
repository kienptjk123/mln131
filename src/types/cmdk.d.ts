declare module 'cmdk' {
  import { ReactNode, ComponentProps } from 'react'

  export interface CommandProps extends ComponentProps<'div'> {
    children?: ReactNode
  }

  export const Command: React.FC<CommandProps> & {
    Input: React.FC<ComponentProps<'input'>>
    List: React.FC<ComponentProps<'div'>>
    Empty: React.FC<ComponentProps<'div'>>
    Group: React.FC<ComponentProps<'div'>>
    Separator: React.FC<ComponentProps<'div'>>
    Item: React.FC<ComponentProps<'div'>>
  }
}
