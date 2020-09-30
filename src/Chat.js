import React ,{useState,useEffect} from 'react'
import "./Chat.css";
import {useParams} from "react-router-dom"
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from './firebase';
import Message from "./Message"
import ChatInput from "./ChatInput"

function Chat() {
  const {roomId} = useParams();
  const [roomDetails,setRoomDetails] = useState({});
  const [roomMessages,setRoomMessages] = useState([]);

  useEffect(function(){
    if(roomId){
      db.collection("rooms").doc(roomId)
      .onSnapshot(function (snapshot){
        setRoomDetails(snapshot.data());
      })
    }
    db.collection("rooms").doc(roomId)
    .collection("messages")
    .orderBy("timestamp","asc")
    .onSnapshot(function(snapshot){
      setRoomMessages(
        snapshot.docs.map(function(docs){
          return docs.data();
        })
      )
    }
    )
  }, [roomId]) 

  return (
    <div className = "chat">
      <div className = "chat__header">
        <div className = "chat__headerLeft">
          <h4 className = "chat__channelName">
            <strong>#{roomDetails.name}</strong>
            <StarBorderIcon/>
          </h4>
        </div>
        <div className = "chat__headerRight">
          <p>
            <InfoOutlinedIcon/> Details
          </p>
        </div>
      </div>
      <div className = "chat__messages">
      {roomMessages.map(function(rMessages){
        return <Message 
        userImage = {rMessages.userImage} 
        message = {rMessages.message} 
        timestamp = {rMessages.timestamp} 
        user = {rMessages.user}
        />
      })}  
      </div>
      <ChatInput channelName = {roomDetails.name} channelId = {roomId}
      />
    </div>
  );
}

export default Chat
