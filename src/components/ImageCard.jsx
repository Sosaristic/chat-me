import React, {useContext} from 'react'
import { Container } from './styled/Container'
import boy from './images/boy.png'
import { SideNavContext } from '../context/SideNavContext'
import { ImageStyled } from './styled/Image.styled'

export default function ImageCard({src, width, height, imgHeight, imgWidth}) {
  const sideNav = useContext(SideNavContext)
 
  return (
<ImageStyled width={width} height={height} imgHeight={imgHeight} imgWidth={imgWidth}>
<img src={src? src : boy} alt="" referrerPolicy="no-referrer"/>
</ImageStyled>


    )
}
