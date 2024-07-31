import { categoryData } from "../../assets/data";
import Products from "./products";
import { useSearchParams } from "react-router-dom";

const Categories = ({ searchValue }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "همه محصولات";

  return (
    <div className="flex flex-col md:px-4 px-2 pt-2 h-fit gap-6">
      {categoryData.map((category) => {
        if (categoryParam === "همه محصولات") {
          return (
            <div key={category.id} className="flex flex-col gap-2">
              <h2 className="text-2xl">{category.name}</h2>
              <Products category={category.name} searchValue={searchValue} />
            </div>
          );
        }
        if (categoryParam === category.name) {
          return (
            <div key={category.id} className="flex flex-col gap-2">
              <h2 className="text-2xl">{category.name}</h2>
              <Products category={category.name} searchValue={searchValue} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Categories;
