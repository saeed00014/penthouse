import { products } from "../../assets/data";
import Product from "../home/category/product";

const Products = ({ category, searchValue }) => {
  return (
    <div className="flex md:justify-normal justify-center gap-4 flex-wrap">
      {products.map((product) => {
        if (category === product.category && searchValue === "") {
          return (
            <div key={product.id}>
              <Product product={product} />
            </div>
          );
        }
        if (category === product.category && searchValue !== "") {
          if (product.dis.includes(searchValue)) {
            return (
              <div key={product.id}>
                <Product product={product} />
              </div>
            );
          }
          return null;
        }
        return null;
      })}
    </div>
  );
};

export default Products;
