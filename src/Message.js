import React from 'react'
import "./Message.css"

function Message(props) {
  return (
    <div className = "message">
      <img src = {props.userImage} alt = ""/>    
      <div class = "message__info">
        <h4>
          {props.user}
          <span className = "message__timestamp">
          {new Date (props.timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{props.message}</p>
      </div>  
    </div>
  )
}

export default Message
