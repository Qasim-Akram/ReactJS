import { useEffect, useState } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'

const defaultMessages = [
    { message: "Hello Chatbot", sender: "user", id: "0" },
    { message: "Hello! How can i help you", sender: "robot", id: "1" },
    { message: "can you get me todays date?", sender: "user", id: "2" },
    { message: "Today is September 27", sender: "robot", id: "3" }
]

function App() {
    const [chatMessages, setChatMessages] = useState(
        JSON.parse(localStorage.getItem('messages')) ||
        []
    )

    useEffect(
        () => {
            localStorage.setItem('messages', JSON.stringify(chatMessages))
        },
        [chatMessages]
    )
    
    return (
        <div className="app-container">

            <ChatMessages
                chatMessages={[...defaultMessages, ...chatMessages]}
            />
            <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />

        </div>
    )
}

export default App
