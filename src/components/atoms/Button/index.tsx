import React from 'react'
import cx from 'classnames'
import type { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  href,
  target,
  type = 'button'
}) => {
  const style = ''

  if (href)
    return (
      <a href={href} target={target} className={cx(style, className)}>
        {children}
      </a>
    )

  return (
    <button onClick={onClick} className={cx(style, className)} type={type}>
      {children}
    </button>
  )
}
