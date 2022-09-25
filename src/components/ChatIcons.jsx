import React from 'react'
import { Container } from './styled/Container'
import { IconStyled } from './styled/ChatIcons.styled'

export default function ChatIcons({icons, title, children, color}) {
  return (
    <IconStyled  color={color}>
        <div className="children">{children}</div>
        <div className="title">{title}</div>
    </IconStyled>
  )
}
