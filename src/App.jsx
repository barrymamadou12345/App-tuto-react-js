import { useState } from "react";
import { Tweet } from "./Tweet";

const DEFAULT_TWEET = [
  {
    name: "Mamadou",
    content: "Je vais Bien",
    like: 1000,
    id: 0,
  },
  {
    name: "Jean",
    content: "Cool",
    like: 24,
    id: 1,
  },
  {
    name: "Moussa",
    content: "Nice",
    like: 11,
    id: 2,
  },
  {
    name: "Paul",
    content: "Fun",
    like: 20,
    id: 3,
  },
];

function App() {
  let [tweets, setTweets] = useState(DEFAULT_TWEET);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const content = e.target.content.value;
    const newTweet = {
      id: tweets[tweets.length - 1]?.id + 1 ?? 0,
      name,
      content,
      like: 0,
    };
    addTweet(newTweet);
  };

  const addTweet = (tweet) => {
    setTweets([...tweets, tweet]);
  }

  const tweetsList = tweets.map((tweet) => {
  
    const onDelete = (tweetId) => {
      setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
    };

    const onLike = (tweetId) => {
      setTweets(curr => {
        const copyTweet = [...curr];
        const likedTweet = copyTweet.find(tweet => tweet.id === tweetId);
        likedTweet.like += 1;

        return copyTweet
      })
    }

    return (
      <Tweet
        key={tweet.id}
        name={tweet.name}
        content={tweet.content}
        like={tweet.like}
        id={tweet.id}
        onDelete={(id) => {
          onDelete(id);
        }}
        onLike={(id) => {
          onLike(id)
        }}
      />
    );
  });

  return (
    <div>
      <form className="tweet-form" onSubmit={handleSubmit}>
        <h4>New tweet</h4>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="content" placeholder="content" />
        <input type="submit" />
      </form>
      <div className="tweet-container"> {tweetsList}</div>
    </div>
  );
}
export default App;
