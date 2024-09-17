import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="">
        <nav  className="bg-gray-900 flex justify-between items-center p-4 fixed top-0 left-0 z-50 w-full">
          <div className="flex items-center space-x-4">
            <NavLink to="/" className={"flex items-center text-xl"}>
              <img
                src="./images/logo.png"
                alt="logo"
                className="h-12 w-12  mr-2"
              />
              <b className="text-white">AgriEmpower</b>
            </NavLink>
          </div>

          <div className="flex justify-center items-center space-x-8">
            {/* Home Button with Icon */}
            <NavLink to="/">
              <button className="btn text-white flex items-center">
                <i className="fa-solid fa-house mr-2"></i> {/* Home icon */}
                Home
              </button>
            </NavLink>

            {/* Community Button with existing image */}
            <NavLink to="/community">
              <div className="flex items-center">
                <img
                  src="./images/community.png"
                  className="w-5 h-5 mx-2"
                  alt="community"
                />
                <button className="btn text-white">Community</button>
              </div>
            </NavLink>

            {/* Market Button with Icon */}
            <NavLink to="/market">
              <button className="btn text-white flex items-center">
              <i class="fa-solid fa-shop mr-2"></i>{" "}
                {/* Market icon */}
                Market
              </button>
            </NavLink>

            {/* About Us Button with Icon */}
            <NavLink to="/about">
              <button className="btn text-white flex items-center">
                <i className="fa-solid fa-info-circle mr-2"></i>{" "}
                {/* About Us icon */}
                About Us
              </button>
            </NavLink>

            {/* Cart Button with existing image */}
            <NavLink to="/cart">
              <div className="flex items-center">
                <img
                  className="w-4 h-5 mx-2"
                  src="./images/Cart.png"
                  alt="cart"
                />
                <button className="btn text-white">Cart</button>
              </div>
            </NavLink>

            {/* Avatar image */}
            <span>
              <img
                className="w-10 h-10 rounded-3xl"
                src="./images/avatar.png"
                alt="avatar"
              />
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Header;
