import React, { useState } from 'react';
import "./ChatPage.css";

import ChatHeader from './ChatHeader';
import ReactMarkdown from 'react-markdown';
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyCWoRonJRj5f_XtulJ2GtWjfvf0w4R-t5Q");

async function run(prompt) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction: "You are Tony Stark" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text;
}

const ChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = async () => {
        if (input.trim() !== '') {
            setMessages([...messages, { user: 'User', text: input }]);
            setInput('');
            setIsTyping(true);

            const gptResponse = await run(input);

            setIsTyping(false);
            setMessages(prevMessages => [
                ...prevMessages,
                { user: 'GPT', text: gptResponse }
            ]);
        }
    };

    return (
        <div className="chat-container">
            <ChatHeader />
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.user}`}>
                        <div className="message-content">
                            {msg.user === 'GPT' ? (
                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                            ) : (
                                <div>{msg.text}</div>
                            )}
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="chat-message GPT typing">
                        <div className="message-content">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                )}
            </div>
            <div className="chat-input">
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Type your message here..." 
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default ChatPage;