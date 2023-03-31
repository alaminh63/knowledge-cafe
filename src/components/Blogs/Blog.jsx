import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";


const Blog = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div >
      {
        cards.map(card => (<Card 
        card={card}
        key={card.publishDate}
        ></Card>))
      }
    </div>
  );
};

export default Blog;
