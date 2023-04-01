import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const {
    blogTitle,
    cover_image,
    authorImg,
    authorName,
    publishDate,
    readTime,
    note
  } = props.card;
  const addBookMark = props.addBookMark;
  const handleReadTime = props.handleReadTime;
  return (
    <div className="pl-8">
      <div className="card w-full bg-base-100 shadow-xl my-8">
        <figure>
          <img src={cover_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="avatar">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full">
                  <img src={authorImg} alt="" />
                </div>
              </div>
              <div className="px-5 flex-col justify-center">
                <h2 className="font-bold sm:text-[15px] md:text-[20px]">{authorName}</h2>
                <p>{publishDate}</p>
              </div>
            </div>
            <div className="text-[20px] flex gap-1 md:gap-3 items-center">
              <p>{readTime} min read</p>
              <button onClick={() => addBookMark(blogTitle)}>
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </div>
          </div>
          <div>
            <h1 className="md:text-[30px] text-[22px] font-bold">{blogTitle}</h1>
          </div>
          <div>
            <h3>{note}</h3>
          </div>
          <div className="card-actions text-blue-700">
            <button onClick={() => handleReadTime(props.card)}>
              <u>mark as read</u>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
