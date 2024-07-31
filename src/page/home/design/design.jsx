import { decorationData } from "../../../assets/data";
import { ItemsScroller } from "../../../components/ui/itemsContainer";
import SeeAll from "../category/seeAll";
import DesignImage from "./designImage";

const Design = () => {
  return (
    <section className="flex flex-col items-center max-w-full pt-[80px] pb-[40px] gap-6 bg-white">
      <div className="flex md:flex-row flex-col items-center w-full md:gap-4 px-2">
        <div className="flex flex-col justify-center md:min-h-[12rem] md:h-[12rem] md:min-w-[12rem] md:w-[12rem] mb-[1.5rem] gap-2">
          <h2 className="text-[1.3rem]">دکوراسیون داخلی منزل</h2>
          <p>
            دکوراسیون داخلی منزل شما با بهترین قیمت و کیفیت توسط دیزاینر های با
            سابقه و درجه یک
          </p>
          <SeeAll link="design" />
        </div>
        <ItemsScroller id="designScroller" classNames="">
          <div className="lg:flex hidden">
            <DesignImage />
          </div>
          {decorationData.map((decoration) => {
            return (
              <div key={`${decoration.id}1decor`}>
                <DesignImage decoration={decoration} />
              </div>
            );
          })}
          {decorationData.map((decoration) => {
            return (
              <div key={`${decoration.id}2decor`}>
                <DesignImage decoration={decoration} />
              </div>
            );
          })}
        </ItemsScroller>
      </div>
    </section>
  );
};

export default Design;
