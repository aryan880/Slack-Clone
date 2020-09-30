import React from 'react'
import "./Login.css"
import {Button} from "@material-ui/core"
import { auth ,provider} from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
  const [state,dispatch] = useStateValue()

  const signIn = function(){
    auth
      .signInWithPopup(provider)
      .then(function(result){
        console.log(result);
        dispatch({
          type:actionTypes.SET_USER,
          user:result.user,
        });
      })
      .catch(function(error){
        alert(error.message);
      })
  }

  return (
    <div className = "login">
      <div className = "login__container">
        <img src = "https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-4nzzs1/Slack_Mark_Web.png"></img>
        <h1>Sign in to Aryan Sawhney's Company</h1>
        <p>killer.slack.com</p>
        <Button onClick = {signIn}>Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login
