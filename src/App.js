import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { UserTweet } from './components/UserTweet';

function App() {

  const [username, setUsername] = useState('');
  const [tweets, setTweets] = useState(null);

  const handleSubmit = async (e, username) => {
    e.preventDefault();
    // Send username to backend
    fetch('http://localhost:4000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: username}),
    })
    .then(res => res.json())
    .then(json => setTweets(json));
  };

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e, username)}>
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
      </form>
    {tweets !== null ? tweets.map(tweet => <UserTweet tweet={tweet.tweet} sentiment={tweet.sentiment} />): () => {}}
    </div>
  );
}

export default App;
