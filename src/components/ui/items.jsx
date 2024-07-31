import { Link } from "react-router-dom";
import { productData } from "../../assets/data";
import cn from "../../merger";

const CategoryHalfCircle = ({ category }) => {
  const title = "کفش";
  return (
    <Link
      to="/products?category="
      className="relative flex flex-col items-center justify-center w-fit h-fit rounded-full cursor-pointer"
    >
      <div className="w-[7rem] min-w-[7rem] h-[7rem] min-h-[7rem]">
        <img
          alt={title}
          src={"/testcata.png"}
          className="h-full w-fit object-contain"
        />
      </div>
      <span className="flex justify-center items-center h-fit text-[1.2rem]">
        {title}
      </span>
    </Link>
  );
};

const ProductCard = ({ product, classNames }) => {
  return (
    <Link
      to="/product/1"
      className={cn(
        "relative flex flex-col items-center justify-end px-3 py-1 h-[15rem] w-[210px] min-w-[210px] max-w-[210px] cursor-pointer bg-ship rounded-[1rem]",
        classNames
      )}
    >
      <div className="absolute top-0 left-0 right-0 bottom-[68px] flex justify-center items-center">
        <img
          src="/testcata.png"
          className="object-cover max-h-full max-w-full"
        />
      </div>
      <div className="flex flex-col w-full h-[56px]">
        <div className="flex justify-between w-full">
          <span className="px-2 pt-[.3rem] pb-[.1rem] text-[.9rem] rounded-full bg-lightBlood text-ship">
            10%
          </span>
          <div className="flex gap-1">
            <span className="text-[.7rem]">{productData.price}</span>
            <span>125</span>
          </div>
        </div>
        <span className="line-clamp-1 pb-1">{productData.description}</span>
      </div>
    </Link>
  );
};

const SearchedProduct = ({ product }) => {
  return (
    <Link
      to="/product/1"
      className="flex items-center w-full h-[4rem] gap-2 cursor-pointer"
    >
      <img alt={""} src={"/testcata.png"} className="h-full object-contain" />
      <span className="line-clamp-1">{productData.description}</span>
    </Link>
  );
};

export { CategoryHalfCircle, ProductCard, SearchedProduct };
