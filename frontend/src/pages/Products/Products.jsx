import Card from "../../components/Card";

const Products = ({ result }) => {
  return (
    <section className="w-full p-4 grid grid-cols-5 gap-6 bg-slate-200">
      {result}
    </section>
  );
};
export default Products;
