import { useSelector } from "react-redux";

const Checkout = () => {
  const data = useSelector((state) => state.data);
  return (
    <div className="flex md:flex-row flex-col items-center justify-center md:gap-4 bg-white rounded-[1rem] text-[.9rem]">
      <div className="flex gap-1">
        <div className="flex flex-row min-w-max">
          <span>هزینه کل</span>
          &#40;
          {data.totalitems}
          <span>مورد</span>
          &#41;:
          {data.totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          <span className="text-[.6rem]">تومان</span>
        </div>
      </div>
      <button className="px-2 rounded-full bg-bg-blue text-white">
        پرداخت صورت حساب
      </button>
    </div>
  );
};

export default Checkout;
