import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
};
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");
  var [item, setItem] = useState("");

  function inputHandler(event) {
    var usrInput = event.target.value;

    setMeaning(emojiDictionary[usrInput]);

    if (emojiDictionary[usrInput] === undefined) {
      setMeaning("Sorry, we don't have this emoji in our database. :(");
    }
    if (usrInput === "") {
      setMeaning("");
    }
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return ( 
    <div className = "App">
    <h1>Emoji Interpreter ✨</h1>
    <h3 style={{color: 'orange'}}>Enter an emoji below and get its meaning 👇</h3>
    <input onChange = { inputHandler }/>
    <h3>{ meaning } </h3> 
    <h4> Emojis we know </h4>
    {
       Method - 1
       <span>{emojisWeKnow}</span>

    }
    </div>
  );
}
