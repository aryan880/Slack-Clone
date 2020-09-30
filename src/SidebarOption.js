import React from 'react'
import { useHistory } from 'react-router-dom'
import db from './firebase';
import "./SidebarOption.css"

function SidebarOption(props) {
  const history = useHistory();

  const selectChannel = function(){
    if(props.id){
      history.push("/room/" + props.id)
    }else{
      history.push(props.title)
    }
  }

  const addChannel = function(){
    const channelName = prompt("Please enter new channel name");
    if(channelName){
      db.collection("rooms").add({
        name:channelName,
      })
    }
  }

  return (
    <div className = "sidebarOption" onClick = {props.addChannelOption ? addChannel : selectChannel}>
      {props.Icon && <props.Icon className = "sidebarOption__icon"/>} 
      {props.Icon ?(
        <h3>{props.title}</h3>
      ):
      (
        <h3 className = "sidebarOption__channel">
          <span className = "sidebarOption__hash">#</span>{props.title}
        </h3>
      )
      }
    </div>
  )
}

export default SidebarOption;
