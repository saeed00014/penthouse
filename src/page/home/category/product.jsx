import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="flex flex-col items-center justify-between p-2 md:w-[320px] w-[300px] gap-2 bg-gray-200 rounded-[1rem]"
    >
      <div className="flex justify-center items-center w-full h-fit">
        <img
          src={product.img}
          alt="product"
          className="w-full h-full rounded-[1rem]"
        />
      </div>
      <div className="flex flex-col w-full gap-3">
        <p className="text-[.9rem] h-[45px] line-clamp-2">{product.dis}</p>
        <div className="flex justify-between">
          <div>
            <span>
              {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
            <span className="text-[.8rem] mr-1">تومان</span>
          </div>
          <div className="flex">
            {product.colors.map((color) => {
              return (
                <span
                  key={`${product.id}${color}`}
                  style={{ backgroundColor: `${color}` }}
                  className="w-[1rem] h-[1rem] rounded-full"
                ></span>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
