import cn from "../../merger";
import { IoIosArrowBack } from "react-icons/io";

const ScrollerBtn = ({ classNames }) => {
  return (
    <div
      className={cn(
        "absolute md:py-[2.4rem] py-[2rem] md:px-[.7rem] px-[.4rem] border border-dark bg-white hover:brightness-90 z-20 cursor-pointer",
        classNames
      )}
    >
      <IoIosArrowBack className="text-[1.4rem]" />
    </div>
  );
};

export default ScrollerBtn;
