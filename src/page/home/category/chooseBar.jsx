import BarBtn from "./barBtn";

const ChooseBar = ({ category, setCategory }) => {
  return (
    <div className="flex justify-center px-2 py-2 gap-4 rounded-full bg-gray-200">
      <BarBtn
        name="پرفروش ترین"
        setEvent={setCategory}
        classNames={category === "پرفروش ترین" && "bg-gray-300"}
      />
      <BarBtn
        name="جدید ترین"
        setEvent={setCategory}
        classNames={category === "جدید ترین" && "bg-gray-300"}
      />
      <BarBtn
        name="سفارشی"
        setEvent={setCategory}
        classNames={category === "سفارشی" && "bg-gray-300"}
      />
    </div>
  );
};

export default ChooseBar;
