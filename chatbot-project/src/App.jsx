import { useState} from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'

     

 function App() {
            const [chatMessages, setChatMessages] = useState([
                {
                    message: "Hello Chatbot",
                    sender: "user",
                    id: "0"
                },
                {
                    message: "Hello! How can i help you",
                    sender: "robot",
                    id: "1"
                },
                {
                    message: "can you get me todays date?",
                    sender: "user",
                    id: "2"
                },
                {
                    message: "Today is September 27",
                    sender: "robot",
                    id: "3"
                }])

            return (
                <div className="app-container">


                    <ChatMessages
                        chatMessages={chatMessages}
                    />
                    <ChatInput
                        chatMessages={chatMessages}
                        setChatMessages={setChatMessages}
                    />

                </div>
            )
        }

export default App
