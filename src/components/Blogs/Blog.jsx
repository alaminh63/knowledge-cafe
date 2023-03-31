import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Blog = ({ readTime, setReadTime, bookMarkItems, setBookMarkItems }) => {
  
  const [cards, setCards] = useState([]);
  const handleBookMark = (title) =>{
    
  }
  const handleReadTime = (blog) => {
    const time = readTime + parseInt(blog.readTime);
    setReadTime(time);
  };
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  // const handleReadTime = (card) => {
  //   console.log(card);
  // };
  return (
    <div>
      {cards.map((card) => (
        <Card
          card={card}
          key={card.publishDate}
          handleReadTime={handleReadTime}
        ></Card>
      ))}
    </div>
  );
};

export default Blog;
