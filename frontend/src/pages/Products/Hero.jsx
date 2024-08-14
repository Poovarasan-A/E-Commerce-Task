const Hero = () => {
  return (
    <div className="w-full h-[60vh] bg-white flex gap-2 py-4 px-20">
      <div className="w-[70%] bg-neutral-200 h-full"></div>
      <div className="flex flex-col w-[30%] gap-2">
        <div className="w-full h-[50%] bg-neutral-200"></div>
        <div className="w-full h-[50%] bg-neutral-200"></div>
      </div>
    </div>
  );
};
export default Hero;
