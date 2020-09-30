import React ,{useState} from 'react'
import "./ChatInput.css"
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from "firebase"

function ChatInput(props) {
  const [input,setInput] = useState ("");
  const [{user}] = useStateValue();
  const sendMessage = function(e){
    e.preventDefault();
    if(props.channelId){
      db.collection("rooms").doc(props.channelId).collection("messages").add ({
        message:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        user:user.displayName,
        userImage:user.photoURL
      });
    }
  }
  function changeInput(event){
    setInput(event.target.value);
  }
  return (
    <div className = "chatInput">
      <form>  
        <input type = "text" placeholder = {"Message #" + props.channelName} value = {input} onChange = {changeInput}/>
        <button type = "submit" onClick = {sendMessage}>SEND</button>
      </form>
    </div>
  )
}

export default ChatInput
