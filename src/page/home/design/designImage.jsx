const DesignImage = ({ decoration }) => {
  return decoration?.img ? (
    <div className="flex flex-col gap-1">
      <img
        src={decoration?.img}
        alt="decoration image"
        className="min-h-[12rem] h-[12rem] min-w-[14rem] w-[14rem] object-cover"
      />
      <p> دکوراسیون {decoration?.type} </p>
    </div>
  ) : null;
};

export default DesignImage;
