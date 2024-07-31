import { products } from "../../../assets/data";
import Product from "./product";

const Products = ({ category }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-3">
      {products.map((product) => {
        if (category === product.markedAs) {
          return (
            <div key={`product${product.id}`}>
              <Product product={product} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Products;
