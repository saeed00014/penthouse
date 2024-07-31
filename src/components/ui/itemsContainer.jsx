import { useState } from "react";
import ScrollerBtn from "./scrollerBtn";
import cn from "../../merger";
import UseScrollerBtn from "../../hooks/useScrollerBtn";

const ItemsScroller = ({ children, id, classNames }) => {
  const [btnFade, setBtnFade] = useState("");

  return (
    <div className="relative flex items-center w-full min-w-0">
      <div
        onClick={() =>
          UseScrollerBtn({
            direction: "left",
            id: id,
            setBtnFade: setBtnFade,
          })
        }
        className={`flex items-center`}
      >
        <ScrollerBtn
          classNames={`-left-2 z-20 ${
            btnFade === "left" && "opacity-60 border-darkwater z-20"
          }`}
        />
      </div>
      <div
        id={id}
        className={cn(
          "flex items-center pb-2 w-full max-w-max h-full gap-2 overflow-y-hidden overflow-x-auto",
          classNames
        )}
      >
        {children}
      </div>
      <div
        onClick={() =>
          UseScrollerBtn({
            direction: "right",
            id: id,
            setBtnFade: setBtnFade,
          })
        }
        className="flex items-center"
      >
        <ScrollerBtn
          classNames={`-right-2 rotate-[180deg] ${
            btnFade === "right" && "opacity-55 border-darkwater z-20"
          }`}
        />
      </div>
    </div>
  );
};

export { ItemsScroller };
