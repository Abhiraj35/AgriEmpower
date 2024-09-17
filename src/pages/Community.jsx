// Community.jsx
import React, { useState } from "react";

import { FaSearch, FaEllipsisV, FaLink, FaPaperPlane } from "react-icons/fa";

// Define a conversation array with more names and image paths for each user
const conversations = [
  {
    name: "Vivek Dalal",
    lastMessage: "150 rupiya dega. 😋",
    time: "12 min",
    avatar: "./images/avatar.png",
    messages: [
      {
        sender: "other",
        text: "Hi, how are you? I want to buy some crops from you?",
        time: "16:04",
        avatar: "./images/avatar.png",
      },
      {
        sender: "me",
        text: "Ha bhai le ja kitne paise dega? 😋 or kitna mal lega?",
        time: "16:04",
        avatar: "./images/avatar.png",
      },

      {
        sender: "other",
        text: "150 Rupiye dega. 😋",
        time: "16:04",
        avatar: "./images/avatar.png",
      },
    ],
  },
  {
    name: "Megan Leib",
    lastMessage: "Let's meet for coffee",
    time: "2 hours",
    avatar: "./images/avatar.png",
    messages: [
      {
        sender: "other",
        text: "Hey Megan, let's grab a coffee?",
        time: "10:30",
        avatar: "./images/avatar.png",
      },
    ],
  },
  {
    name: "Mota Bhai",
    lastMessage: "Can we reschedule?",
    time: "4 hours",
    avatar: "./images/mota-bhai.jpeg",
    messages: [
      {
        sender: "other",
        text: "Sorry, I need to reschedule our meeting.",
        time: "09:15",
        avatar: "./images/mota-bhai.jpeg",
      },
    ],
  },
  {
    name: "Bill Gates",
    lastMessage: "I'll send the document",
    time: "1 day",
    avatar: "./images/bill-gates.jpeg",
    messages: [
      {
        sender: "me",
        text: "Can you send the document please?",
        time: "11:30",
        avatar: "./images/avatar.png",
      },
    ],
  },
  {
    name: "Ravi Kumar",
    lastMessage: "Let's work on this project",
    time: "3 days",
    avatar: "./images/avatar.png",
    messages: [
      {
        sender: "me",
        text: "Let's start working on the project tomorrow.",
        time: "18:45",
        avatar: "./images/avatar.png",
      },
    ],
  },
  {
    name: "Mukesh Ambani",
    lastMessage: "Sure, I'll check it out",
    time: "1 week",
    avatar: "./images/mukesh-ambani.jpeg",
    messages: [
      {
        sender: "other",
        text: "Can you check the report for me?",
        time: "16:50",
        avatar: "./images/mukesh-ambani.jpeg",
      },
    ],
  },
  {
    name: "Rahul Singh",
    lastMessage: "Where should we meet?",
    time: "2 weeks",
    avatar: "./images/avatar.png",
    messages: [
      {
        sender: "me",
        text: "Where's the best place to meet tomorrow?",
        time: "14:20",
        avatar: "./images/avatar.png",
      },
    ],
  },
  {
    name: "Narendra Modi",
    lastMessage: "I'll call you later",
    time: "3 weeks",
    avatar: "./images/Narendra-Modi.jpeg",
    messages: [
      {
        sender: "other",
        text: "I'll call you later to discuss.",
        time: "13:00",
        avatar: "./images/Narendra-Modi.jpeg",
      },
    ],
  },
  {
    name: "Mark Zukerberg",
    lastMessage: "Can you share the details?",
    time: "1 month",
    avatar: "./images/avatar.png",
    messages: [
      {
        sender: "other",
        text: "I need the details for the upcoming meeting.",
        time: "15:45",
        avatar: "./images/avatar.png",
      },
    ],
  },
  {
    name: "Amir Khan",
    lastMessage: "Thanks for your help!",
    time: "1 month",
    avatar: "./images/avatar.png",
    messages: [
      {
        sender: "other",
        text: "Thanks for helping me with the task.",
        time: "19:30",
        avatar: "./images/avatar.png",
      },
    ],
  },
  {
    name: "Lisa Wong",
    lastMessage: "Let's meet up soon",
    time: "1 month",
    avatar: "./images/avatar.png",
    messages: [
      {
        sender: "other",
        text: "We should catch up soon!",
        time: "09:45",
        avatar: "./images/avatar.png",
      },
    ],
  },
  {
    name: "Peter Park",
    lastMessage: "I'll update you tomorrow",
    time: "2 months",
    avatar: "./images/avatar.png",
    messages: [
      {
        sender: "other",
        text: "I'll send you the updates tomorrow.",
        time: "17:50",
        avatar: "./images/avatar.png",
      },
    ],
  },
  {
    name: "Kavya Sharma",
    lastMessage: "I need your feedback",
    time: "2 months",
    avatar: "./images/avatar.png",
    messages: [
      {
        sender: "other",
        text: "Could you give me feedback on my presentation?",
        time: "12:15",
        avatar: "./images/avatar.png",
      },
    ],
  },
];

const Community = () => {
  const [activeConversation, setActiveConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  // Function to change the active conversation
  const handleConversationClick = (conversation) => {
    setActiveConversation(conversation);
  };

  // Function to send a message
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const updatedMessages = [
      ...activeConversation.messages,
      {
        sender: "me",
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: "./images/avatar.png",
      },
    ];

    // Update the active conversation's messages
    setActiveConversation({
      ...activeConversation,
      messages: updatedMessages,
    });

    // Clear input
    setNewMessage("");
  };

  return (
    <div className="flex h-screen bg-gray-800 mt-20 ">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 border-r border-gray-200 h-screen overflow-y-auto hover:gray-600 hover:rounded-lg">
        <div className="bg-gray-400 sticky top-0 p-4 border-b border-black-500 flex items-center space-x-2">
          <FaSearch className="text-xl" />
          <input
            className="w-full p-2 border rounded-lg border-gray-500"
            placeholder="Search..."
            type="text"
          />
        </div>
        <div className="p-4 ">  
          {conversations.map((conv, index) => (
            <div
              key={index}
              className=" flex items-center p-2 hover:bg-gray-600 rounded-lg cursor-pointer text-white"
              onClick={() => handleConversationClick(conv)}
            >
              <img
                alt={`Profile of ${conv.name}`}
                className="w-10 h-10 rounded-full"
                src={conv.avatar}
              />
              <div className="ml-3 ">
                <div className="font-medium">{conv.name}</div>
                <div className="text-sm text-gray-400">{conv.lastMessage}</div>
              </div>
              <div className="ml-auto text-xs text-gray-400">{conv.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col sticky top-0 h-screen ">
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-200 bg-gray-400">
          <div className="flex items-center">
            <img
              alt="Profile"
              className="w-10 h-10 rounded-full"
              src={activeConversation.avatar} // Active conversation avatar
            />
            <div className="ml-3 font-medium">{activeConversation.name}</div>
          </div>
          <FaEllipsisV className="text-gray-400" />
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          {activeConversation.messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start mb-4 ${msg.sender === "me" ? "justify-end" : ""}`}
            >
              {msg.sender !== "me" && (
                <img alt="Sender avatar" className="w-10 h-10 rounded-full" src={msg.avatar} />
              )}
              <div className={`ml-3 ${msg.sender === "me" ? "mr-3" : ""}`}>
                <div className={`p-3 rounded-lg ${msg.sender === "me" ? "bg-yellow-300" : "bg-gray-400"}`}>
                  <p>{msg.text}</p>
                </div>
                <div className={`text-xs text-gray-400 mt-1 ${msg.sender === "me" ? "text-right" : ""}`}>
                  {msg.time}
                </div>
              </div>
              {msg.sender === "me" && (
                <img alt="Receiver avatar" className="w-10 h-10 rounded-full" src={msg.avatar} />
              )}
            </div>
          ))}
        </div>

        {/* Reply Section */}
        <div className="sticky bottom-0 z-10 p-4 border-t border-gray-200 bg-gray-400 flex items-center">
          <FaLink className="text-xl mr-2" />
          <input
            className="flex-1 p-2 border rounded-lg border-gray-300"
            placeholder="Type your message here"
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className="ml-4 text-blue-500 text-xl" onClick={handleSendMessage}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
