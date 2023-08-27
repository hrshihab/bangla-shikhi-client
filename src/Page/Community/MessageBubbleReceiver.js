import React from 'react';

const MessageBubbleReceiver = ({message}) => {
  const {_id,message:msg,userName,userPhoto,date} = message;
  console.log(userPhoto);
  return (
    <div className="chat chat-start">
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img src={userPhoto} alt='receiver_photo' />
      </div>
    </div>
    <div className="chat-header px-4">
      {userName}
    </div>
    <div className="chat-bubble">{msg}</div>
    <div className="chat-footer opacity-50">
      Sent at {date}
    </div>
  </div>
  );
};

export default MessageBubbleReceiver;