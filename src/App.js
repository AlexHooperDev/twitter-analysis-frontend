import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { UserTweet } from "./components/UserTweet";
import { SentimentDoughnut } from "./containers/SentimentDoughnut";
import { Header } from "./containers/Header";
import { Overview } from "./containers/Overview";
import { PosNegTweets } from "./components/PosNegTweets";
import { MostLikedTweet } from "./containers/MostLikedTweet";
import { UserWrapper } from "./components/UserWrapper";

import { OneColRow, TwoColRow } from "./styled";
import { MostRetweetedTweet } from "./containers/MostRetweetedTweet";
import { MostPositiveTweet } from "./containers/MostPositiveTweet";
import { MostNegativeTweet } from "./containers/MostNegativeTweet";
import { MostUsedWords } from "./containers/MostUsedWords";
import { MostHashtags } from "./containers/MostHashtags";
import { MostMentions } from "./containers/MostMentions";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState("");
  const [tweets, setTweets] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [tweetSentiments, setTweetSentiments] = useState({
    positive: 0,
    neutral: 0,
    negative: 0
  });

  const handleSubmit = async (e, username) => {
    setLoading(true);
    e.preventDefault();
    // Send username to backend
    fetch("http://192.168.0.13:4000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: username })
    })
      .then(res => {
        if (res.status === 200) {
          return res;
        } else {
          throw new Error();
        }
      })
      .then(res => res.json())
      .then(json => {
        setTweets(json);
        setUserData(json.user);
      })
      .then(() => setLoading(false), setDataLoaded(true), setFetchError(false))
      .catch(() => {
        setFetchError(true);
        setLoading(false);
      });
  };

  const collateSentiments = tweetArray => {
    // go through each array item and count n* of each sentiment
    tweetArray.forEach(tweet => {
      switch (tweet.sentiment) {
        case "POSITIVE":
          setTweetSentiments({
            ...tweetSentiments,
            positive: tweetSentiments.positive++
          });
          break;
        case "NEUTRAL":
          setTweetSentiments({
            ...tweetSentiments,
            neutral: tweetSentiments.neutral++
          });
          break;
        case "NEGATIVE":
          setTweetSentiments({
            ...tweetSentiments,
            negative: tweetSentiments.negative++
          });
          break;
        default:
          return;
      }
    });
  };

  const data = {
    datasets: [
      {
        data: [
          tweetSentiments.positive,
          tweetSentiments.neutral,
          tweetSentiments.negative
        ],
        backgroundColor: ["#289BB1", "#9DA0E3", "#BA5B94"],
        borderWidth: 0
      }
    ],
    labels: ["Positive", "Neutral", "Negative"]
  };

  useEffect(() => {
    if (tweets !== null) {
      collateSentiments(tweets.tweets);
    }
  }, [tweets]);

  return (
    <div className="App">
      <Header
        handleSubmit={handleSubmit}
        username={username}
        setUsername={setUsername}
        loading={loading}
        error={fetchError}
      />
      {tweets && (
        <UserWrapper loaded={dataLoaded}>
          <Overview
            user={userData.handle}
            name={userData.name}
            avatar={userData.avatar}
            followCount={userData.followers}
            friendCount={userData.following}
            bio={userData.bio}
          />
          <TwoColRow>
            <SentimentDoughnut tweetArray={data} />
            <SentimentDoughnut tweetArray={data} />
            {/* <PosNegTweets /> */}
          </TwoColRow>
          <TwoColRow>
            <MostPositiveTweet tweet={tweets.stats.mostPositiveTweet} />
            <MostNegativeTweet tweet={tweets.stats.mostNegativeTweet} />
          </TwoColRow>
          <TwoColRow>
            <MostHashtags hashtags={tweets.stats.hashtags} />
            <MostMentions mentions={tweets.stats.userMentions} />
          </TwoColRow>
          <TwoColRow>
            <MostLikedTweet tweet={tweets.stats.mostLikedTweet} />
            <MostRetweetedTweet tweet={tweets.stats.mostRetweetedTweet} />
          </TwoColRow>
          <OneColRow>
            <MostUsedWords words={tweets.stats.mostUsedWords} />
          </OneColRow>
        </UserWrapper>
      )}
    </div>
  );
}

export default App;
