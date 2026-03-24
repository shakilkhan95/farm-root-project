import React from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";
import ButtonPrimary from "../Buttons/ButtonPrimary";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 md:px-10 lg:px-10 bg-[#C4DBCE]">
      {/* logo section  */}
      <div>
        <h3 className="text-xl font-bold cursor-pointer">FarmRoot</h3>
      </div>

      {/* nav section  */}
      <nav className="hidden md:flex gap-6">
        <a href="/" className="navHover">
          Home
        </a>
        <a href="/" className="navHover">
          Menu
        </a>
        <a href="/" className="navHover">
          About Us
        </a>
        <a href="/" className="navHover">
          Subscription
        </a>
        <a href="/" className="navHover">
          Recipes
        </a>
        <a href="/" className="navHover">
          Contact Us
        </a>

        {/* icons section  */}
        <div className="hidden lg:flex gap-2 ml-8">
          <span className="icons hover:bg-green-500 hover:text-white cursor-pointer">
            <FiSearch />
          </span>
          <span className="icons hover:bg-green-500 hover:text-white cursor-pointer">
            <IoIosContact />
          </span>
          <span className="icons hover:bg-green-500 hover:text-white cursor-pointer">
            <FiShoppingCart />
          </span>
        </div>
      </nav>

      <ButtonPrimary btnValue='Shop Now' display='md:hidden'/>
    </header>
  );
};

export default Header;
