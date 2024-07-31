import { useParams } from "react-router-dom";
import { products } from "../../assets/data";
import { useDispatch } from "react-redux";
import { addcard } from "../../store/dataSlice";

const ProductPage = () => {
  const { id } = useParams();
  const product = products[id - 1];
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:px-4 px-2 w-full h-full max-w-[1000px] gap-4 bg-gray-100">
      <div className="flex justify-center w-full md:min-h-[20rem] min-h[10rem] ">
        <img
          src={product.img}
          alt="product image"
          className="md:w-[500px] w-[400px] object-cover"
        />
      </div>
      <div className="flex justify-between">
        <h1>{product.dis}</h1>
        <div className="flex items-center">
          {product.colors.map((color) => {
            return (
              <span
                key={`${color}${product.id}product`}
                style={{ backgroundColor: `${color}` }}
                className="w-[1rem] h-[1rem] rounded-full"
              ></span>
            );
          })}
        </div>
      </div>
      <div className="flex gap-1">
        <span>
          {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
        <span>تومان</span>
      </div>
      <button
        onClick={() => dispatch(addcard(product))}
        className="px-4 py-1 w-fit bg-red-400 text-white rounded-[1rem]"
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
};
export default ProductPage;
