import React, { useContext, useRef, useEffect } from 'react';
import MessageField from './MessageField';
import { useQuery } from '@tanstack/react-query';
import CardSkeleton from '../Shared/Loading/CardSkeleton';
import { AuthContext } from '../../contexts/AuthProvider';
import MessageBubbleSender from './MessageBubbleSender';
import MessageBubbleReceiver from './MessageBubbleReceiver';

const Community = () => {
  const { user } = useContext(AuthContext);
  const messageContainerRef = useRef(null); // Ref for the message container

  const { data: messages = [], isLoading, refetch } = useQuery({
    queryKey: ['messages'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/messages');
      const data = await res.json();
      return data;
    },
  });

  // Scroll to the bottom when messages change or new messages arrive
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  if (isLoading) {
    return <CardSkeleton></CardSkeleton>;
  }

  return (
    <section className="max-w-4xl mx-auto ">
   
      <div className='border-x-2 border-b-2 rounded-xl shadow-xl lg:mb-20'>
      <div
        ref={messageContainerRef} // Attach the ref to the message container
        className="mx-auto  space-y-8  px-2 max-h-[80vh]"
        style={{  overflowY: 'auto' }} // Add max height and scroll behavior
      >
        {messages.map((message, i) => {
          return user?.email === message.userEmail ? (
            <MessageBubbleSender
              message={message}
              key={message._id}
            ></MessageBubbleSender>
          ) : (
            <MessageBubbleReceiver
              message={message}
              key={message._id}
            ></MessageBubbleReceiver>
          );
        })}
        
      </div>
      <MessageField refetch={refetch}></MessageField>
      </div>

    </section>
  );
};

export default Community;
