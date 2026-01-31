// src/components/ConversationItem.js
import React from 'react';
import './ConversationItem.css';


const ConversationItem = ({ conversation, onClick }) => {
    return (
        <div
            className="conversation-item"
            onClick={() => onClick(conversation.id)}
        >
            <div className="conversation-date">
                Conversation #{conversation.id}
            </div>

            <div className="conversation-summary">
                {conversation.question.substring(0, 50)}...
            </div>
        </div>
    );
};



export default ConversationItem;