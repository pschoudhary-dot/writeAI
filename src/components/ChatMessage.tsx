import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

const ChatMessage = ({ message, isUser }: ChatMessageProps) => {
  return (
    <div className={`flex items-start gap-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`w-8 h-8 rounded-full glass-card flex items-center justify-center ${
        isUser ? 'bg-purple-500/20' : 'bg-blue-500/20'
      }`}>
        {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
      </div>
      <div className={`glass-card p-4 rounded-2xl max-w-[80%] ${
        isUser ? 'bg-purple-500/10' : 'bg-blue-500/10'
      }`}>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;