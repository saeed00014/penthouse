import Checkout from "./checkout";
import Products from "./products";

const CardPage = () => {
  return (
    <section className="flex items-start justify-center w-full h-full bg-gray-100 max-w-[1400px]">
      <div className="directionDiv flex md:flex-row flex-col justify-center gap-4 w-full h-[calc(100vh-60px)] max-w-[1450px]">
        <div className="flex flex-col  w-full h-full">
          <div className="sticky top-[60px] flex justify-between w-full border-b-[1px] bg-white text-2xl md:p-4 p-2 gap-2 z-20">
            <h1 className="md:text-[initial] text-[1.1rem]"> سبد خرید</h1>
            <Checkout />
          </div>
          <Products />
        </div>
      </div>
    </section>
  );
};

export default CardPage;
