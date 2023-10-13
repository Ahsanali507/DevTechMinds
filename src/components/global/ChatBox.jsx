import React,{useState} from 'react'

function ChatBox() {
    const [isChatboxOpen, setChatboxOpen] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const toggleChatbox = () => {
    setChatboxOpen(!isChatboxOpen);
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      addMessage(userInput, true);
      respondToUser(userInput);
      setUserInput('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const addMessage = (message, isUser) => {
    const messageElement = (
      <div className={`mb-2 ${isUser ? 'text-right' : ''}`}>
        <p className={`rounded-lg py-2 px-4 inline-block ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
          {message}
        </p>
      </div>
    );
    setChatMessages([...chatMessages, messageElement]);
  };

  const respondToUser = (userMessage) => {
    // Replace this with your chatbot logic
    setTimeout(() => {
      addMessage("This is a response from the chatbot.", false);
    }, 500);
  };
  return (
    <div>
      <div className={`fixed bottom-0 right-0 mb-4 mr-4`}>
        <button className="bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 transition duration-300 flex items-center" onClick={toggleChatbox}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Chat with Admin Bot
        </button>
      </div>

      <div className={`fixed bottom-16 right-4 w-96 ${isChatboxOpen ? '' : 'hidden'}`}>
        <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
          <div className="p-4 border-b bg-cyan-500 text-white rounded-t-lg flex justify-between items-center">
            <p className="text-lg font-semibold">Admin Bot</p>
            <button className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400" onClick={toggleChatbox}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div id="chatbox" className="p-4 h-80 overflow-y-auto">
            {chatMessages}
          </div>
          <div className="p-4 border-t flex">
            <input id="user-input" type="text" placeholder="Type a message" className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-500" value={userInput} onChange={handleUserInput} onKeyPress={handleKeyPress} />
            <button id="send-button" className="bg-cyan-500 text-white px-4 py-2 rounded-r-md hover:bg-cyan-600 transition duration-300" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatBox