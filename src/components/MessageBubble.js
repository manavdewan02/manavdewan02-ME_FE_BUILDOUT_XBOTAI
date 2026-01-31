// src/components/MessageBubble.js
import React, { useState } from 'react';
import FeedbackControls from './FeedbackControls';
import './MessageBubble.css';

const MessageBubble = ({ message, type, onFeedback }) => {
    const [showFeedback, setShowFeedback] = useState(false);

    return (
        <div
            className={`message-bubble ${type}`}
            onMouseEnter={() => type === 'bot' && setShowFeedback(true)}
            onMouseLeave={() => type === 'bot' && setShowFeedback(false)}
        >
            <div className="avatar">
                {type === 'user' ? 'You' : <span>Soul AI</span>}
            </div>

            {/* ✅ KEEP <p> SIMPLE AND ALWAYS VISIBLE */}
            <div className="message-content">
                <p data-testid="bot-message">{message.text}</p>

                {type === 'bot' && showFeedback && (
                    <FeedbackControls
                        onFeedback={(feedbackType) =>
                            onFeedback(message.id, feedbackType)
                        }
                    />
                )}

                {type === 'bot' && message.feedback && !showFeedback && (
                    <div className="historical-feedback">
                        {message.feedback === 'like' ? '👍' : '👎'}
                    </div>
                )}
            </div>

            <div className="timestamp">{message.timestamp}</div>
        </div>
    );
};

export default MessageBubble;
