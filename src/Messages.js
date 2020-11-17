import React from 'react'
import {Card, CardContent, Typography} from '@material-ui/core'
import './message.css'

function Messages(props) {
    const isUser = props.user === props.username;

    return (
        <div className={`message ${isUser && 'message_user'}`}>
         <Card className={isUser ? "message_userCard" : "message_guestCard"}>
          <CardContent>
          <Typography color="white" variant="h5" component="h2">
             {props.username}: {props.text}
           </Typography>
          </CardContent>
         </Card>
        </div>
    )
}

export default Messages
