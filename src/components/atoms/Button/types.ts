export interface ButtonProps {
  children: any
  className?: string
  onClick?: React.MouseEventHandler
  href?: string
  target?: 'blank'
  type?: 'button' | 'submit'
}
