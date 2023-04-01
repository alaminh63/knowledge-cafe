import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Blog = ({ readTime, setReadTime, bookMarkItems, setBookMarkItems }) => {
  const [cards, setCards] = useState([]);
  const addBookMark = (title) => {
    const previous = [...bookMarkItems];
    if (previous.includes(title)) {
      toast.error("already added");
    } else {
      const newBookMark = [...bookMarkItems, title];
      setBookMarkItems(newBookMark);
    }
  };
  const handleReadTime = (blog) => {
    const time = readTime + parseInt(blog.readTime);
    setReadTime(time);
  };
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div>
      {cards.map((card) => (
        <Card
          card={card}
          key={card.publishDate}
          handleReadTime={handleReadTime}
          addBookMark={addBookMark}
        ></Card>
      ))}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Blog;
