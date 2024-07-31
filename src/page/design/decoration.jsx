import { decorationData } from "../../assets/data";

const Decoration = () => {
  return decorationData.map((decoration) => {
    return (
      <div
        key={decoration.id}
        className="flex flex-col justify-center items-center gap-1"
      >
        <div className="w-full">
          <img
            src={decoration.img}
            alt="decoration image"
            className="min-w-full object-cover"
          />
        </div>
        <p className="md:text-[1.2rem]">دکوراسیون {decoration.type} </p>
      </div>
    );
  });
};

export default Decoration;
