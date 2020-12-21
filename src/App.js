import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😃": "happy",
  "😡": "angry",
  "🤒": "sick",
  "👀": "eyes",
  "🚀": "rocketship",
  "☂️": "umbrella"
};

const emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("Enter a valid emoji");
  function inputHandle(e) {
    var meaning = emojiDictionary[e.target.value];
    if (meaning === undefined) {
      meaning = "We don't have that in my database";
    }
    setMeaning(meaning);
  }

  function clickHandler(item) {
    var meaning = emojiDictionary[item];
    if (meaning === undefined) {
      meaning = "We don't have that in my database";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <h2>Know what the emojis mean</h2>
      <input
        onChange={(e) => inputHandle(e)}
        type="text"
        placeholder="Enter your emojis here"
        style={{ padding: "1em", fontSize: "1em" }}
      />
      <h2>{meaning}</h2>
      <div>
        <h3>Click on any emoji </h3>
        {emojiList.map((emoji) => {
          return (
            <span
              onClick={() => clickHandler(emoji)}
              style={{ padding: "0.5em", fontSize: "2em", cursor: "pointer" }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
