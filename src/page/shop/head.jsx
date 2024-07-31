import { IoSearch } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

const Head = ({ setSearchValue }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "همه محصولات";

  const handleCategory = (e) => {
    setSearchParams({ category: e.target.value });
  };

  return (
    <form className="sticky top-[60px] right-0 left-0 flex items-center justify-between md:px-4 px-2 w-full h-[3rem] bg-white gap-2">
      <div className="relative">
        <label
          htmlFor="searchInput"
          className="absolute top-[.7rem] right-[.6rem] cursor-text"
        >
          <IoSearch />
        </label>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          name="searchValue"
          type="text"
          id="searchInput"
          placeholder="جستجوی محصول"
          className="pr-[2rem] h-[2.4rem] md:w-[initial] w-full rounded-full bg-gray-200"
        />
      </div>
      <select
        onChange={(e) => handleCategory(e)}
        name="categoryState"
        id=""
        className="w-[8rem] border border-black"
        value={categoryParam}
      >
        <option value="همه محصولات">همه محصولات</option>
        <option value="مبل">مبل</option>
        <option value="لوستر">لوستر</option>
        <option value="تخت خواب">تخت خواب</option>
        <option value="میز و صندلی">میز و صندلی</option>
      </select>
    </form>
  );
};

export default Head;
