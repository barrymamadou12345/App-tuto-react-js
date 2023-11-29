import { useState } from "react";
import { Tweet } from "./Tweet";
import { DEFAULT_TWEET } from "./Components/Tableau";
import { Formulaire } from "./Components/Formulaire";

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
    e.target.name.value = "";
    e.target.content.value = "";
  };

  const addTweet = (tweet) => {
    setTweets([...tweets, tweet]);
  };

  const tweetsList = tweets.map((tweet) => {
    const onDelete = (tweetId) => {
      setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
    };

    const onLike = (tweetId) => {
      setTweets((curr) => {
        const copyTweet = [...curr];
        const likedTweet = copyTweet.find((tweet) => tweet.id === tweetId);
        likedTweet.like += 1;

        return copyTweet;
      });
    };

    return (
      <Tweet
        key={tweet.id}
        name={tweet.name}
        content={tweet.content}
        like={tweet.like}
        id={tweet.id}
        onDelete={(id) => onDelete(id)}
        onLike={(id) => onLike(id)}
      />
    );
  });

  return (
    <div>
      <Formulaire onSubmit={handleSubmit} />
      <div className="tweet-container"> {tweetsList}</div>
    </div>
  );
}
export default App;
