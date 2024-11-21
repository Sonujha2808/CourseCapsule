import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import chatIcon from '../photo/ChatBotIcon.png';
import './Chatbot.css';

const Chatbot = () => {
    const draggableRef = useRef(null);

    const handleClick = () => {
        window.open('http://localhost:8501', '_blank'); // Change this to your Streamlit chatbot URL
    };

    return (
        <Draggable nodeRef={draggableRef}>
            <div ref={draggableRef} className="chatbot-icon" onClick={handleClick}>
                <img src={chatIcon} alt="Chatbot Icon" />
            </div>
        </Draggable>
    );
};

export default Chatbot;
