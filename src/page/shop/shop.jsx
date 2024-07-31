import { useState } from "react";
import Categories from "./categories";
import Head from "./head";

const Shop = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex flex-col w-full h-fit max-w-[1400px] ">
      <Head setSearchValue={setSearchValue} />
      <Categories searchValue={searchValue} />
    </div>
  );
};

export default Shop;
