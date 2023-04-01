import React from "react";

const Header = () => {
  return (
    <div >
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <a href="/home" className="normal-case font-bold text-3xl">
            Knowledge Cafe
          </a>
        </div>
        <div className="avatar navbar-end">
          <div className="w-14 rounded-full">
            <img src="https://wallpaperaccess.com/full/4046703.jpg" alt="" />
          </div>
        </div>
      </div>
      <hr className="border-2 my-3" />
    </div>
  );
};

export default Header;
