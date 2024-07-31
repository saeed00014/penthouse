import { productInfo } from "../../data/data";
import SuggestionCard from "./suggestionCard";

const Suggestions = () => {
  return (
    <div className="flex md:flex-col flex-wrap items-center justify-around md:[&>*:nth-child(1)]:rounded-t-[1rem] gap-y-2">
      {productInfo.map((product) => {
        return (
          <div key={product.id}>
            <SuggestionCard product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;
