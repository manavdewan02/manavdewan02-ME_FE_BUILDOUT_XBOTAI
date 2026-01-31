// src/components/ConversationItem.js
import React from 'react';
import './ConversationItem.css';

const ConversationItem = ({ conversation, onClick }) => {
    const date = conversation.timestamp
        ? new Date(conversation.timestamp).toLocaleDateString()
        : '';

    const summary =
        conversation.messages && conversation.messages.length > 0
            ? conversation.messages[0].text.substring(0, 50) + '...'
            : conversation.question
                ? conversation.question.substring(0, 50) + '...'
                : 'Empty Conversation';

    return (
        <div
            className="conversation-item"
            onClick={() => onClick(conversation.id)}
        >
            {date && (
                <div className="conversation-date">{date}</div>
            )}

            <div className="conversation-summary">
                {summary}
            </div>

            {conversation.overallRating !== null &&
                conversation.overallRating !== undefined && (
                    <div className="conversation-rating">
                        Rating: {conversation.overallRating} ★
                    </div>
            )}
        </div>
    );
};

export default ConversationItem;
