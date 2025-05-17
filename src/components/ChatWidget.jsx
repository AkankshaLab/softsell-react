import { useState, useRef, useEffect } from 'react';

const ChatWidget = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your SoftSell assistant. How can I help you today?", isUser: false },
    { 
      text: "Here are some common questions:", 
      isUser: false,
      suggestions: [
        "How do I sell my license?",
        "What software licenses do you accept?",
        "How long does the process take?"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Add user message
      const newMessages = [...messages, { text: inputValue, isUser: true }];
      setMessages(newMessages);
      setInputValue('');
      
      // Simulate AI response after a delay
      setTimeout(() => {
        let aiResponse = '';
        
        if (inputValue.toLowerCase().includes('sell') || inputValue.toLowerCase().includes('license')) {
          aiResponse = {
            text: `To sell your software license:
1. Go to our contact form and fill in your details
2. Provide information about your license
3. We'll send you a valuation within 24 hours
4. If you accept, we handle the secure transfer
5. You receive payment within 3 business days`,
            isUser: false
          };
        } else if (inputValue.toLowerCase().includes('accept') || inputValue.toLowerCase().includes('software')) {
          aiResponse = {
            text: `We accept licenses from all major software vendors including:
- Adobe Creative Cloud
- Microsoft Office/Windows
- Autodesk products
- VMware
- Many other enterprise software licenses`,
            isUser: false
          };
        } else if (inputValue.toLowerCase().includes('long') || inputValue.toLowerCase().includes('process')) {
          aiResponse = {
            text: `The typical timeline is:
- Valuation provided within 24 hours
- Transfer process takes 2-3 business days
- Payment received within 3 business days after transfer
- Total time: usually less than a week`,
            isUser: false
          };
        } else {
          aiResponse = {
            text: "I'm sorry, I don't have information about that. For specific questions, please contact our support team at support@softsell.com or call us at (555) 123-4567.",
            isUser: false
          };
        }
        
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div 
        id="chat-toggle" 
        className="bg-primary w-14 h-14 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-primary-dark transition duration-300"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <i className="fas fa-robot text-white text-2xl"></i>
      </div>
      
      <div 
        id="chat-container" 
        className={`${chatOpen ? 'block' : 'hidden'} chat-container bg-white rounded-xl shadow-xl w-80 h-[500px] flex flex-col absolute bottom-20 right-0`}
      >
        <div className="bg-primary text-white p-4 rounded-t-xl flex justify-between items-center">
          <h3 className="font-bold">SoftSell Assistant</h3>
          <button 
            id="chat-close" 
            className="text-white hover:text-gray-200"
            onClick={() => setChatOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div id="chat-messages" className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`chat-message ${message.isUser ? 'bg-primary text-white ml-auto' : 'bg-gray-100'} p-3 rounded-lg fade-in`}
            >
              <p className="whitespace-pre-line">{message.text}</p>
              {message.suggestions && (
                <div className="mt-2 space-y-2">
                  {message.suggestions.map((suggestion, i) => (
                    <button 
                      key={i}
                      className="suggested-question w-full text-left text-sm bg-white hover:bg-gray-200 p-2 rounded transition duration-300"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 border-t">
          <div className="flex">
            <input 
              id="chat-input" 
              type="text" 
              placeholder="Type your question..." 
              className="flex-1 px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button 
              id="chat-send" 
              className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary-dark transition duration-300"
              onClick={handleSendMessage}
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;