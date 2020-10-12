// src/components/QuoteList.js
import React from "react";

// An array of objects
const quotes = [
  {
    id:1,
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
  {
    id:2,
    quote: "Nothing you say can upset us. We're the MTV generation.",
    character: "Bart Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
  },
  {
    id:3,
    quote: "That's where I saw the leprechaun...He told me to burn things.",
    character: "Ralph Wiggum",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
  },
  {
    id:4,
    quote:
      "Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone.",
    character: "Principal Skinner",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460"
  }
];

const QuoteList = () => (
  <div>
    {quotes.map(item => (
      <div key={item.id}>
        <img src={item.image} alt={item.character}/>  
        <p key={item.quote}>{item.quote}</p>
      </div>
    ))}
  </div>
);

export default QuoteList; 