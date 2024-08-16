const Input = ({ handleChange, value, title, name }) => {
  return (
    <div>
      <label className="w-full flex items-center gap-1">
        <input type="radio" value={value} name={name} onChange={handleChange} />
        <span></span>
        {title}
      </label>
    </div>
  );
};
export default Input;
