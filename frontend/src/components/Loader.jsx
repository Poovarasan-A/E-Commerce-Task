import { Fragment } from "react";
import { Triangle } from "react-loader-spinner";
const Loader = () => {
  return (
    <Fragment>
      <div className="w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#8B5CF6"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </Fragment>
  );
};
export default Loader;
