import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

function ChatMessages({ chatMessages }) {

            const chatMessagesRef = useRef(null);

            useEffect(() => {
                const containerElem = chatMessagesRef.current
                if (containerElem) {
                    containerElem.scrollTop = containerElem.scrollHeight;
                }
            }, [chatMessages]);

            return (
                <div className="chat-message-container"
                    ref={chatMessagesRef}>

                    {chatMessages.map((chatMessages) => {
                        return (
                            <ChatMessage
                                message={chatMessages.message}
                                sender={chatMessages.sender}
                                key={chatMessages.id}
                            />
                        )
                    })
                    }
                </div>
            )

        }
 
export default ChatMessages;        