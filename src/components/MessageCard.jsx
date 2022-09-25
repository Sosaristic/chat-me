import React from 'react'
import { MessageStyled } from './styled/Message.styled'
import Time from './Time'

export default function MessageCard({type, message, time,  senderName}) {
  return (
    <MessageStyled $type={type}>
      <div className="date"><Time time={time} date={true}/></div>
      <div className="message-container">
      {senderName && <div className='name'>{senderName}</div>}
        <div className="message">{message}</div>
        <div className="time"><Time time={time} normalTime={true} /></div>
        </div>
    </MessageStyled>
  )
}
