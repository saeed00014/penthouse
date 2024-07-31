import { FaBagShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShopIcon = () => {
  const data = useSelector((state) => state.data);
  return (
    <Link to="/card" className="flex justify-center w-[4rem] text-[1.2rem]">
      <div className="relative">
        <FaBagShopping />
        {data.cards.length ? (
          <span className="absolute -bottom-3 -right-3 px-2 pt-[.2rem] text-[.9rem] bg-bg-blue text-white rounded-full">
            {data.cards.length}
          </span>
        ) : null}
      </div>
    </Link>
  );
};

export default ShopIcon;
