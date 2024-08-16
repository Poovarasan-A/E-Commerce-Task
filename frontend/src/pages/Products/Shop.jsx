import { useState } from "react";
import Filter from "../../components/Filter";
import Products from "./Products";
import { products } from "./data";
import Card from "../../components/Card";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //  Input Filter
  const [query, setQuery] = useState("");

  //   const handleInputChange = (event) => {
  //     setQuery(event.target.value);
  //   };

  const filteredItems = products.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //  Radio Filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, brand, newPrice, name }) =>
          category === selected ||
          brand === selected ||
          newPrice === selected ||
          name === selected
      );
    }

    return filteredProducts.map(
      ({ image, name, ratings, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          image={image}
          name={name}
          ratings={ratings}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <section className="w-full min-h-full flex">
      {/* <Search handleInputChange={handleInputChange} query={query} /> */}
      <Filter handleChange={handleChange} />
      <div className="w-full">
        <Products result={result} />
      </div>
    </section>
  );
};
export default Shop;
