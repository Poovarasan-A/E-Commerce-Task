import Footer from "../components/Footer";
import Category from "./Products/Category";
import FeaturedProducts from "./Products/FeaturedProducts";
import Hero from "./Products/Hero";
import RecentProducts from "./Products/RecentProducts";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-full bg-slate-200/90">
      <Hero />
      <Category />
      <FeaturedProducts />
      <RecentProducts />
      <Footer />
    </div>
  );
};
export default Home;
