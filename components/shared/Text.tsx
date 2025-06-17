'use client'
import React from 'react'

interface ITextPropType {
  className?: string
  id?: string
  children: React.ReactNode
  as?: 'h2' | 'h1' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  clickFunc?: () => void
}

export const Text: React.FC<ITextPropType> = ({
  className,
  children,
  clickFunc,
  id,
  as,
}: ITextPropType) => {
  const Component: React.FC<ITextPropType> = ({
    as,
    className,
    id,
    clickFunc,
    children,
  }) => {
    const Element = as ? as : 'div'
    return React.createElement(
      Element,
      { className: className, onClick: clickFunc, id: id },
      children
    )
  }
  if (as) {
    return (
      <Component className={className} clickFunc={clickFunc} as={as} id={id}>
        {children}
      </Component>
    )
  } else {
    return (
      <h6 className={className} onClick={clickFunc} id={id}>
        {children}
      </h6>
    )
  }
}
