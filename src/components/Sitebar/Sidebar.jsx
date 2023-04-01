import React from "react";

const Sidebar = ({ readTime, bookMarkItems }) => {
  return (
    <div className="sticky top-12 pr-8 ">
      <div className="flex justify-center bg-[#6047ec1d] my-5 border border-[#6047EC]  rounded-xl py-5 text-[#6047EC] text-[22px] font-bold ">
        <h2>Spent time on read : {readTime}Min</h2>
      </div>
      <div className="my-5 h-full py-8 bg-[#6047ec1d] rounded-xl text-[16px] font-medium">
        <div className="w-full mx-auto px-8">
          <div className="font-bold">
            <h2 className="text-[24px] font-bold">Bookmarked Blogs:{[bookMarkItems.length]}</h2>
            {bookMarkItems.map((bookMarkTitle) => {
              return (
                <p className="bg-white p-5 rounded-xl my-4" key={bookMarkTitle}>
                  {bookMarkTitle}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      {/* <div className=" flex justify-center bg-[#6047ec1d] rounded-xl py-8 text-[22px] font-bold ">
        <h2>Bookmarked Blogs :{[bookMarkItems.length]}</h2>
        {bookMarkItems.map((bookMarkTitle) => {
          return <p key={bookMarkTitle}>{bookMarkTitle}</p>;
        })}
      </div> */}
    </div>
  );
};

export default Sidebar;
