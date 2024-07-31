import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex items-center gap-2 hover:bg-white rounded-full transition-all duration-150 pl-1"
    >
      <div className="min-w-[3rem] w-[3rem] min-h-[3rem] h-[3rem] bg-white rounded-full p-1">
        <img
          src={product.img}
          alt="product"
          className="rounded-full h-full w-full"
        />
      </div>
      <p className="group group-hover:text-black transition-all duration-150 text-white line-clamp-1">
        {product.dis}
      </p>
    </Link>
  );
};

export default Product;
