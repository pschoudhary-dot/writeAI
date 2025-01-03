import React, { useState } from 'react';
import { 
  Settings, 
  LogOut, 
  Home, 
  GitPullRequest, 
  MessageSquare, 
  Download, 
  Mic, 
  Image, 
  Link2, 
  Send, 
  Smile, 
  Paperclip 
} from 'lucide-react';
import ChatMessage from '../components/ChatMessage';

const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: message, isUser: true }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "I'm working on your request. How can I help you further?", 
        isUser: false 
      }]);
    }, 1000);
    
    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex">
      {/* Sidebar */}
      <div className="w-64 glass-card border-r border-white/10">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Previous Chats</h2>
          <div className="space-y-2">
            {['Blog Post Ideas', 'LinkedIn Post', 'YouTube Script'].map((chat) => (
              <button 
                key={chat}
                className="w-full p-2 text-left rounded hover:bg-white/5 transition-colors"
              >
                {chat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="glass-card p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">AI Writing Assistant</h1>
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="p-2 hover:bg-white/10 rounded-full"
              >
                <Settings className="w-6 h-6" />
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 glass-card rounded-lg shadow-xl">
                  <div className="py-1">
                    <button className="px-4 py-2 w-full text-left hover:bg-white/10 flex items-center gap-2">
                      <Home className="w-4 h-4" /> Homepage
                    </button>
                    <button className="px-4 py-2 w-full text-left hover:bg-white/10 flex items-center gap-2">
                      <GitPullRequest className="w-4 h-4" /> Contribute
                    </button>
                    <button className="px-4 py-2 w-full text-left hover:bg-white/10 flex items-center gap-2">
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="glass-card p-4">
            <div className="flex items-end gap-2">
              <div className="flex-1 glass-card rounded-xl p-2">
                <div className="flex items-center gap-2 px-2">
                  <Smile className="w-5 h-5 text-gray-400" />
                  <Paperclip className="w-5 h-5 text-gray-400" />
                </div>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full bg-transparent border-0 focus:ring-0 resize-none mt-1 min-h-[60px]"
                  placeholder="Type your message..."
                  rows={2}
                />
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={handleSend}
                  className="p-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
                <button className="p-3 hover:bg-white/10 rounded-xl transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-64 glass-card border-l border-white/10">
          <div className="p-4">
            <h3 className="text-lg font-bold mb-4">References</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Link2 className="w-4 h-4" />
                <a href="#" className="text-purple-400 hover:text-purple-300">Article Reference</a>
              </div>
              <div className="flex items-center gap-2">
                <Image className="w-4 h-4" />
                <a href="#" className="text-purple-400 hover:text-purple-300">Image Reference</a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">Export</h3>
              <button className="w-full flex items-center justify-center gap-2 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                <Download className="w-4 h-4" />
                Download as MD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;