import Category from "./category/category";
import Design from "./design/design";
import Landing from "./landing/landing";

const Home = () => {
  return (
    <div className="w-full h-[calc(100%+100px)] bg-home-bg bg-no-repeat bg-cover bg-center max-w-[1400px]">
      <Landing />
      <Design />
      <Category />
    </div>
  );
};

export default Home;
