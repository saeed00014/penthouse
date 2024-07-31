import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletecard, selectquantitycard } from "../../store//dataSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const founded = data.cards.find((card) => product.id == card.id);

  const [quantity, setQuantity] = useState(founded?.quantity);

  useEffect(() => {
    setQuantity(founded.quantity);
  }, [founded]);

  const handleDelete = (product) => {
    dispatch(deletecard(product));
  };

  const handleSelect = (e) => {
    const value = e.target.value;
    dispatch(selectquantitycard({ ...product, quantity: Number(value) }));
    setQuantity(value);
  };

  return (
    <article className="flex flex-col w-full max-w-[600px] h-fit bg-white">
      <div className="flex md:flex-row flex-col md:text-[1rem] text-[.9rem]">
        <div className="flex items-start justify-center md:w-[12rem] w-full md:pt-2 md:pr-4">
          <img
            src={product.img}
            alt="product image"
            className="object-contain md:min-w-[12rem] min-w-[10rem]"
          />
        </div>
        <div className="flex flex-col justify-between text-right md:p-4 p-2">
          <div className="flex flex-col items-start gap-1">
            <h2 className="">{product.dis}</h2>
            <div className="flex gap-4 items-center">
              <div className="flex flex-col ">
                <div className="flex gap-1">
                  <span className="-ml-1">
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                  <span className="text-[.5rem]">تومان</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-[.8rem]">
              <span>رنگ</span>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-center md:pt-2">
            <div className="relative flex items-center justify-center ">
              <select
                style={{ direction: "initial" }}
                id={product.id}
                name="تعداد"
                size="1"
                value={quantity}
                onChange={(e) => handleSelect(e)}
                className="flex w-[73px] h-[30px] px-1 pb-1 rounded-[15px] bg-transparent shadow-3xl z-10"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <label
                style={{ direction: "initial" }}
                onClick={() => document.getElementById(product.id).click()}
                htmlFor={product.id}
                className="absolute left-0 top-0 right-3 flex items-center justify-center font-[500] text-[.8rem] w-[73px] h-[30px] px-1 pb-1 rounded-[15px] bg-g_Background_White_Shop shadow-3xl"
              >
                عدد
              </label>
            </div>
            <button
              onClick={() => handleDelete(product)}
              className="border-l-[1px] px-4 h-6 min-w-max font-[400] text-[.8rem]"
            >
              حذف
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-start w-full pb-1 pt-1 md:pr-4 pr-2 border-t-2  md:text-[1rem] text-[.9rem]">
        هزینه کل :{" "}
        {(product.price * product.quantity)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
        تومان
      </div>
    </article>
  );
};

export default ProductCard;
