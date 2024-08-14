const Footer = () => {
  return (
    <div className="w-full h-[30vh] bg-black/90 text-white/80 flex flex-col items-center pt-5 ">
      <h2 className="h-[50%] font-extrabold text-3xl">
        <span className="text-violet-600">Y</span>kart
      </h2>
      <ul className="h-[45%] flex gap-10 items-center justify-between">
        <li>Laptops</li>
        <li>Mobiles</li>
        <li>Electronics</li>
        <li>Camera</li>
        <li>Appliances</li>
        <li>Gaming</li>
        <li>Books</li>
        <li>Sports</li>
      </ul>
      <hr className=" border-white w-full" />
      <div className="h-[20%] text-sm w-full text-center">
        <p className="py-2">Copyright reserved</p>
      </div>
    </div>
  );
};
export default Footer;
