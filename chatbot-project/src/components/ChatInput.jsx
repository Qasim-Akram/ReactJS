import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
 
export  function ChatInput({ chatMessages, setChatMessages }) {
            const [saveInput, setInputText] = useState('')
            const [isLoading, setIsLoading] = useState(false)

            function saveInputText(event) {
                setInputText(event.target.value)
            }

            async function sendMessage() {
                if (!saveInput.trim() || isLoading) return;

                setIsLoading(true)

                const newChatMessage = [...chatMessages,
                {
                    message: saveInput,
                    sender: "user",
                    id: crypto.randomUUID()
                }]
                setChatMessages(newChatMessage);

                const response = await Chatbot.getResponseAsync(saveInput)
                setChatMessages([...newChatMessage,
                {
                    message: response,
                    sender: "robot",
                    id: crypto.randomUUID()
                }]);

                setInputText('')
                setIsLoading(false)
            }

            return (
                <div className="chat-input-container">
                    <input
                        placeholder="Send a message to Chatbot"
                        size="30"
                        className="chat-input"
                        onChange={saveInputText}
                        value={saveInput}
                        disabled={isLoading}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                sendMessage();
                            }
                            if (e.key === "Escape") {
                                setInputText('');
                            }
                        }}
                    />
                    <button
                        onClick={sendMessage}
                        disabled={isLoading}
                        className="send-button">
                        {isLoading ? "Loading..." : "Send"}
                    </button>
                </div>
            );
        }
