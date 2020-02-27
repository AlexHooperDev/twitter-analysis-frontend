import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { UserTweet } from './components/UserTweet';
import { SentimentDoughnut } from './containers/SentimentDoughnut';

function App() {

  const [username, setUsername] = useState('');
  const [tweets, setTweets] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [tweetSentiments, setTweetSentiments] = useState({ positive: 0, neutral: 0, negative: 0, });

  const handleSubmit = async (e, username) => {
    e.preventDefault();
    // Send username to backend
    fetch('http://localhost:4000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: username }),
    })
      .then(res => res.json())
      .then(json => setTweets(json))
      .then(setDataLoaded(true));
  };

  const collateSentiments = (tweetArray) => {
    // go through each array item and count n* of each sentiment
    tweetArray.forEach(tweet => {
      switch (tweet.sentiment) {
        case "POSITIVE":
          setTweetSentiments({ ...tweetSentiments, positive: tweetSentiments.positive++ });
          break;
        case "NEUTRAL":
          setTweetSentiments({ ...tweetSentiments, neutral: tweetSentiments.neutral++ });
          break;
        case "NEGATIVE":
          console.log(tweet);
          setTweetSentiments({ ...tweetSentiments, negative: tweetSentiments.negative++ });
          break;
        default:
          return;
      }
    });
  }

  const data = {
    datasets: [{
      data: [tweetSentiments.positive, tweetSentiments.neutral, tweetSentiments.negative],
      backgroundColor: 'orange',
      borderWidth: 2,
      borderColor: 'grey',
    }],
    labels: [
      'Positive',
      'Neutral',
      'Negative'
    ],
  }

  useEffect(() => {
    if (tweets !== null) {
      collateSentiments(tweets);
    }
  }, [tweets]);

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e, username)}>
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
      </form>
      {/* {tweets !== null ? tweets.map(tweet => <UserTweet tweet={tweet.tweet} sentiment={tweet.sentiment} />) : () => { }} */}
      {tweets !== null ? <SentimentDoughnut tweetArray={data} /> : () => { }}
    </div>
  );
}

export default App;