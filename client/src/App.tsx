import React from 'react';

import SendMessage from './components/SendMessage';
import ConnectionAnalytics from './components/ConnectionAnalytics';
import StorageAnalytics from './components/StorageAnalytics';
import Inbox from './components/Inbox';

import './App.css';

function App() {
  return (
    <div className="App">

      <header>

      </header>

      <SendMessage></SendMessage>
      <StorageAnalytics></StorageAnalytics>
      <ConnectionAnalytics></ConnectionAnalytics>

      <Inbox></Inbox>

      <br/>

    </div>
  );
}

export default App;
