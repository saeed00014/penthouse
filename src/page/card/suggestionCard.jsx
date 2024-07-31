import { useDispatch } from "react-redux";
import RateHandler from "../../components/rateHandler";
import { addcard } from "../../store/dataSlice";

const SuggestionCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <article className="flex bg-g_Text_White h-[130px] w-[250px] py-1 overflow-hidden">
      <div className="flex w-[7rem]">
        <img
          src={product.img}
          alt="product's image"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-center items-start w-[133px]">
        <p className="line-clamp-2 ">{product.title}</p>
        <span className="flex w-full justify-start">
          {(
            product.price -
            (product.price * product.discountPrecent) / 100
          ).toLocaleString("ar-EG")}
          <small>تومان</small>
        </span>
        <div
          style={{ direction: "initial" }}
          className="flex items-center relative w-full h-[16px] "
        >
          <RateHandler product={product} />
          <small>({product.rateCount})</small>
          <small>{product.rate}</small>
        </div>
        <button
          onClick={() => dispatch(addcard(product))}
          className="bg-red-400 py-1 px-3 text-[.7rem] mt-2 rounded-[10px] text-g_Text_White"
        >
          افزودن به سبد خرید
        </button>
      </div>
    </article>
  );
};

export default SuggestionCard;
