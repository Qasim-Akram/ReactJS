import robortprofileimage from '../assets/Chatbot.png';
import userprofileimage from '../assets/User.png';

export function ChatMessage({ message, sender }) {

            return (
                <div className={sender === "user" ?
                    'chat-message-user' : 'chat-message-robot'}>

                    {sender === "robot" && (
                        <img src={robortprofileimage}
                            className="chat-message-profile"
                        />
                    )}

                    <div class="chat-message-text">
                        {message}
                    </div>

                    {sender === "user" && (
                        <img src={userprofileimage}
                            className="chat-message-profile"
                        />
                    )}
                </div>
            );
        }