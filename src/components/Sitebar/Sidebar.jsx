import React from "react";

const Sidebar = ({readTime, bookMarkItems}) => {

  return (
    <div className="sticky top-12 ">
      <div className="flex justify-center bg-[#6047ec1d] my-5 border border-[#6047EC]  rounded-xl py-5 text-[#6047EC] text-[22px] font-bold ">
        <h2>Spent time on read : {readTime}Min</h2>
      </div>
      <div className=" flex justify-center bg-[#6047ec1d] rounded-xl py-8 text-[22px] font-bold ">
        <h2>Bookmarked Blogs :</h2>
      </div>
    </div>
  );
};

export default Sidebar;
