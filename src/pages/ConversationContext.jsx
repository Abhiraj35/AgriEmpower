// ConversationContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create a Context for the active conversation
const ConversationContext = createContext();

export const useConversation = () => useContext(ConversationContext);

export const ConversationProvider = ({ children }) => {
  const [activeConversation, setActiveConversation] = useState(null);

  return (
    <ConversationContext.Provider value={{ activeConversation, setActiveConversation }}>
      {children}
    </ConversationContext.Provider>
  );
};
