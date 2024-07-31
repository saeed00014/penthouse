import { useState } from "react";
import ChooseBar from "./chooseBar";
import Products from "./products";
import SeeAll from "./seeAll";

const Category = () => {
  const [category, setCategory] = useState("سفارشی");

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 bg-white">
      <h2 className="text-[1.2rem]">بهترین محصولات </h2>
      <ChooseBar category={category} setCategory={setCategory} />
      <Products category={category} />
      <SeeAll link="shop" />
    </section>
  );
};

export default Category;
