import React from "react";

const Card = ({ card }) => {
  const { cover_image, authorImg, authorName, publishDate, readTime } = card;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
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
            <div>
              <p>{readTime}</p>
            </div>
          </div>

          <div className="card-actions text-blue-700">
            <a href="">
              <u>mark as read</u>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
