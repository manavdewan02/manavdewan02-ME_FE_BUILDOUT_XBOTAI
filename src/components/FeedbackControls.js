// src/components/FeedbackControls.js
import React from 'react';
import './FeedbackControls.css';

const FeedbackControls = ({ onFeedback }) => {
    return (
        <div className="feedback-controls">
            <button
                className="feedback-button"
                aria-label="like"
                data-testid="like-button"
                onClick={() => onFeedback('like')}
            >
                👍
            </button>

            <button
                className="feedback-button"
                aria-label="dislike"
                data-testid="dislike-button"
                onClick={() => onFeedback('dislike')}
            >
                👎
            </button>
        </div>
    );
};

export default FeedbackControls;
