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
  } = props.card;

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
                <div className="w-20 rounded-full">
                  <img src={authorImg} alt="" />
                </div>
              </div>
              <div className="px-5">
                <h2 className="card-title font-bold">{authorName}</h2>
                <p>{publishDate}</p>
              </div>
            </div>
            <div className="text-[20px] flex gap-1 md:gap-3 items-center">
              <p>{readTime} min read</p>
              <button>
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-[30px] font-bold">{blogTitle}</h1>
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
