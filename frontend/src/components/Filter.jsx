import Input from "./Input";

const Filter = ({ handleChange }) => {
  return (
    <section className=" border-r-2 py-4 flex flex-col items-start px-16">
      {/* Category */}
      <div>
        <h2 className="font-semibold py-2">Category</h2>
        <div className="ml-4">
          <label className="w-full flex items-center gap-1">
            <input
              type="radio"
              value={""}
              name="test"
              onChange={handleChange}
            />
            <span></span>All
          </label>
          <Input
            value="Laptops"
            title="Laptops"
            name="test"
            onChange={handleChange}
          />
          <Input
            value="Mobiles"
            title="Mobiles"
            name="test"
            onChange={handleChange}
          />
          <Input
            value="Electronics"
            title="Electronics"
            name="test"
            onChange={handleChange}
          />
          <Input
            value="Camera"
            title="Camera"
            name="test"
            onChange={handleChange}
          />
          <Input
            value="Appliances"
            title="Appliances"
            name="test"
            onChange={handleChange}
          />
          <Input
            value="Gaming"
            title="Gaming"
            name="test"
            onChange={handleChange}
          />
          <Input
            value="Books"
            title="Books"
            name="test"
            onChange={handleChange}
          />
          <Input
            value="Sports"
            title="Sports"
            name="test"
            onChange={handleChange}
          />
        </div>
      </div>
      {/* Price */}
      <div>
        <h2 className="font-semibold py-2">Price</h2>
        <div className="ml-4">
          <label className="w-full flex items-center gap-1">
            <input
              type="radio"
              value={""}
              name="test2"
              onChange={handleChange}
            />
            <span></span>All
          </label>
          <Input
            value={100}
            title="0-100"
            name="test2"
            onChange={handleChange}
          />
          <Input
            value={150}
            title="100-150"
            name="test2"
            onChange={handleChange}
          />
          <Input
            value={500}
            title="150-500"
            name="test2"
            onChange={handleChange}
          />
          <Input
            value={1000}
            title="500-1000"
            name="test2"
            onChange={handleChange}
          />
          <Input
            value={10000}
            title="1000-10000"
            name="test2"
            onChange={handleChange}
          />
        </div>
      </div>
      {/* Ratings */}
      <div>
        <h2 className="font-semibold py-2">Ratings</h2>
        <div className="ml-4">
          <label className="w-full flex items-center gap-1">
            <input
              type="radio"
              value={""}
              name="test2"
              onChange={handleChange}
            />
            <span></span>All
          </label>
          <Input
            value={5}
            title="5 Stars"
            name="test2"
            onChange={handleChange}
          />
          <Input
            value={4.5}
            title="4.5 Stars"
            name="test2"
            onChange={handleChange}
          />
          <Input
            value={4}
            title="4 Stars"
            name="test2"
            onChange={handleChange}
          />
          <Input
            value={3.5}
            title="3.5 Stars"
            name="test2"
            onChange={handleChange}
          />
          <Input
            value={3}
            title="3 Stars"
            name="test2"
            onChange={handleChange}
          />
        </div>
      </div>
    </section>
  );
};
export default Filter;
