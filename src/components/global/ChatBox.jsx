import React, { useState } from 'react';

function ChatBox() {
  const [isChatboxOpen, setChatboxOpen] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [isEmailPrompt, setEmailPrompt] = useState(false);
  const [email, setEmail] = useState('');

  const toggleChatbox = () => {
    setChatboxOpen(!isChatboxOpen);
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      if (isEmailPrompt) {
        // The user has entered an email, send the email and message to your company
        const userMessage = `User Email: ${email}\nUser Message: ${userInput}`;

        // Make a POST request to send the email
        sendEmailToCompany(userMessage);
        
        // Clear email and userInput fields
        setEmail('');
        setUserInput('');
        setEmailPrompt(false);
      } else {
        // Ask the user for their email
        addMessage('Please enter your email...:', false);
        setEmailPrompt(true);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const sendEmailToCompany = (userMessage) => {
    fetch('/send-email/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log('Email sent successfully');
          addMessage('Your email has been sent... Thanks!', false);
        } else {
          console.error('Failed to send email');
          addMessage('Failed to send the email. Please try again.', false);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        addMessage('An error occurred while sending the email. Please try again later.', false);
      });
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

  return (
    <div>
      <div className={`fixed bottom-0 right-0 mb-4 mr-4`}>
        <button className="bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 flex items-center" onClick={toggleChatbox}>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Chat with Admin Bot */}
          <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z"/>
          </svg>
        </button>
      </div>

      <div className={`fixed bottom-16 right-4 w-96 ${isChatboxOpen ? '' : 'hidden'}`}>
        <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
          <div className="p-4 border-b bg-primary-600 text-white rounded-t-lg flex justify-between items-center">
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
            <input id="user-input" type="text" placeholder="Type a message" className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-400" value={userInput} onChange={handleUserInput} onKeyPress={handleKeyPress} />
            <button id="send-button" className="bg-primary-600 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 transition duration-300" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
