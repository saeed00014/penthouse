import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { products } from "../../../assets/data";
import Product from "./product";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form className="relative flex border-[2px] rounded-[2rem] md:w-[16rem] w-[14rem] overflow-visible">
      <label
        htmlFor="landingInput"
        className="absolute top-1 bottom-1 right-1 flex justify-center items-center rounded-[2rem] md:w-[2.3rem] w-[2.1rem] bg-bg-blue text-white cursor-text z-10"
      >
        <IoSearch className="md:text-[1.3rem] text-[1.1rem]" />
      </label>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        id="landingInput"
        placeholder="جستجوی محصول"
        className="w-full md:h-[2.8rem] h-[2.4rem] rounded-[2rem] md:pr-[3rem] pr-[2.8rem] pl-[1rem] placeholder-white placeholder:opacity-80 text-white bg-white/25 focus:outline-none backdrop-blur"
      />
      <div
        className={`searchBarScroller absolute md:top-[3.5rem] top-[3rem] -left-4 -right-4 bottom-[5rem] flex flex-col gap-3 ${
          searchValue
            ? "max-h-[10rem] h-[10rem] py-2 px-2 border-[2px]"
            : "max-h-0 h-0"
        } overflow-y-auto overflow-x-hidden bg-white/30 backdrop-blur rounded-[.5rem] transition-all duration-250`}
      >
        {products.find((product) => product.dis.includes(searchValue)) ? (
          products.map((product) => {
            if (product.dis.includes(searchValue) && searchValue) {
              return (
                <div key={product.id}>
                  <Product product={product} />
                </div>
              );
            }
            return null;
          })
        ) : (
          <div className="w-full text-center text-white">محصولی یافت نشد</div>
        )}
      </div>
    </form>
  );
};

export default Search;
