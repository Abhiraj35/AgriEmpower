// index.jsx (or wherever App is rendered)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ConversationProvider } from './ConversationContext';

ReactDOM.render(
  <ConversationProvider>
    <App />
  </ConversationProvider>,
  document.getElementById('root')
);
