import { useSelector } from "react-redux";
import ProductCard from "./product";
import DelAll from "./delAll";

const Products = () => {
  const data = useSelector((state) => state.data);

  return (
    <div className="flex flex-col h-full md:gap-4 gap-2 mt-2 md:mr-2 ">
      {data.cards[0] ? (
        data.cards.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })
      ) : (
        <p className="flex justify-center w-full pt-4"> سبد خرید خالی است </p>
      )}
      <DelAll />
    </div>
  );
};

export default Products;
