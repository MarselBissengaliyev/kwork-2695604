import React from 'react'
import "./Container.scss"

const Container = ({children,className}) => {
  return (
    <div className={`container tw-px-5 ${className}`}>{children}</div>
  )
}

export default Container