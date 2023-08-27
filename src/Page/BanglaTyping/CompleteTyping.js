import React from 'react';

const CompleteTyping = ({wpm,startgame}) => {
  return (
    <div className="container">
    <h2>
      Your WPM is <strong>{wpm}</strong>
    </h2>
    <button className="start-btn" onClick={this.startGame}>
      Play again
    </button>
  </div>
  );
};

export default CompleteTyping;