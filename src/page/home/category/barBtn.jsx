import cn from "../../../merger";

const BarBtn = ({ name, setEvent, classNames }) => {
  return (
    <button
      onClick={() => setEvent(name)}
      className={cn(
        `md:px-4 px-3 py-2 md:text-[1rem] text-[.9rem] bg-white hover:bg-gray-300 transition-all duration-150 rounded-full cursor-pointer`,
        classNames
      )}
    >
      {name}
    </button>
  );
};

export default BarBtn;
