import { Link } from "react-router-dom";
import Logo from "../logo";
import Dropdown from "../dropdown";
import ShopIcon from "./shopIcon";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 right-0 left-0 min-w-full flex justify-center items-center z-50">
      <nav className="flex items-center justify-between md:px-4 px-2 min-h-[60px] w-full max-w-[1400px] bg-white">
        <div className="md:flex hidden">
          <ShopIcon />
        </div>
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex md:hidden justify-center items-center w-[4rem] h-[2rem] text-2xl cursor-pointer"
        >
          <GiHamburgerMenu />
        </div>
        <div className="md:flex hidden justify-between w-[20rem] gap-2">
          <Dropdown name="مبلمان" list="" />
          <Link to="/shop" className="">
            فروشگاه
          </Link>
          <Link to="/design" className="">
            دیزاین
          </Link>
        </div>
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed top-0 left-0 bottom-0 right-0"
          ></div>
        )}
        <div
          className={`fixed bottom-0 top-[60px] ${
            isOpen ? "right-0" : "-right-[12rem]"
          } flex flex-col md:hidden gap-8 items-start px-2 pt-4 pr-6 w-[12rem] transition-all duration-200 bg-gray-100`}
        >
          <ul
            onClick={() => setIsOpen(false)}
            className="flex flex-col justify-between [&>li>a]:inline-block [&>li]:py-3 [&>li>a]:w-full [&>li>a]:h-full h-fit w-full rounded-[.4rem] cursor-pointer"
          >
            <li>
              <Link to="/shop?category=مبل"> مبل </Link>{" "}
            </li>
            <li>
              <Link to="/shop?category=لوستر"> لوستر </Link>{" "}
            </li>
            <li>
              <Link to="/shop?category=تخت خواب"> تخت خواب </Link>
            </li>
            <li>
              <Link to="/shop?category=میز و صندلی"> میز و صندلی </Link>
            </li>
            <li>
              <Link to="/shop" className="">
                فروشگاه
              </Link>
            </li>
            <li>
              <Link to="/design" className="">
                دیزاین
              </Link>
            </li>
            <li>
              <ShopIcon />
            </li>
          </ul>
        </div>
        <Logo />
      </nav>
    </header>
  );
};

export default Header;
