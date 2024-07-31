import Decoration from "./decoration";

const Design = () => {
  return (
    <section className="flex flex-col items-center w-full h-full max-w-[1000px] mt-4 gap-6">
      <div className="flex flex-col md:px-4 px-2 gap-4">
        <Decoration />
      </div>
    </section>
  );
};

export default Design;
