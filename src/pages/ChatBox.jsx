import React from 'react'
import { Component } from 'react'
import { useState} from 'react'
import './component.css'

function ChatBox()
{
    const [input,setInput]= useState("")
    const[chatLog, setChatLog]= useState([{
        user: "gpt",
        message:"How can I help you today?"
    }])
    
 function clearChat(){
    setChatLog([]);
 }   
    
    
    async function handleSubmit(e){
        e.preventDefault();
        let chatLogNew=[...chatLog, {user:"me", message: `${input}`}]
        setInput("");
        
        setChatLog(chatLogNew)
        
        const messages= chatLogNew.map((message)=> message.message).join("\n")
        
        const response =await fetch("http://localhost:3080/", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                message: messages
            })
        });
        const data=await response.json();
        setChatLog([...chatLogNew, {user:"gpt", message:`${data.message}`}])
        // console.log(data.message);
        
    }
    return(
        <div className="ChatBox">
            <section className="chatbox">
                <div className="chat-log">
            {chatLog.map((message, index) => (
              <ChatMessage key = {index} message={message}/>  
            ))}
            </div>
            <div className="chat-input-holder">
                <form onSubmit={handleSubmit}>
                <input 
                rows="1"
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                type="text" 
                placeholder="Type here" 
                className="w-full max-w-xs input input-bordered" />
                </form>
            </div>
            </section>
            <div className='new-chat-button' onClick={clearChat}>
                <button className="mt-3 btn">New chat</button>
            </div>
        </div>
    )
}

export default ChatBox;


const ChatMessage=({message}) => {
    return(
    <div className={`chat-message' ${message.user === "gpt" && "chatgpt"}`}>
        <div className="chat-message-center">
            <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
               {message.user === "gpt" } 
            </div>
            <div className='message'>
                {message.message}
            </div>
        </div>
    </div>
    )
}