import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Dropdown = ({ name, list }) => {
  return (
    <div className="group relative">
      <div className="flex items-center gap-1 cursor-pointer">
        <span className="group-hover:rotate-180">
          <IoIosArrowDown />
        </span>
        <span>{name}</span>
      </div>
      <ul className="hidden group-hover:flex flex-col justify-between absolute top-[1.5rem] right-0 [&>li>a]:p-3 [&>li>a]:inline-block [&>li>a]:w-full [&>li>a]:h-full h-fit w-[10rem] rounded-[.4rem] bg-gray-100 border cursor-pointer">
        <li className="hover:bg-gray-300 rounded-t-[.4rem]">
          {" "}
          <Link to="/shop?category=مبل"> مبل </Link>{" "}
        </li>
        <li className="hover:bg-gray-300">
          {" "}
          <Link to="/shop?category=لوستر"> لوستر </Link>{" "}
        </li>
        <li className="hover:bg-gray-300">
          <Link to="/shop?category=تخت خواب"> تخت خواب </Link>
        </li>
        <li className="hover:bg-gray-300 rounded-b-[.4rem]">
          {" "}
          <Link to="/shop?category=میز و صندلی"> میز و صندلی </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
