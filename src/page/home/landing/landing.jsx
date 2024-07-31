import Search from "./search";

const Landing = () => {
  return (
    <section className="flex justify-center items-center w-full h-full  bg-gradient-to-t from-white to-15% ">
      <div className="flex flex-col items-center justify-center md:gap-6 gap-4 mb-[160px]">
        <h1 className="text-white lg:text-4xl md:text-[2rem] text-center">
          بهترین محصولات با بهترین کیفیت در پنت هوس{" "}
        </h1>
        <p className="text-white lg:text-2xl md:text-[1.4rem] text-center">
          همین الآن خرید کنید و از تخفیفات تابستانه بهرهمند شوید
        </p>
        <Search />
      </div>
    </section>
  );
};

export default Landing;
