import Chart from "./chartData/Chart";
import Traffic from "./traffic/Traffic";

const Banner = () => {
  return (
    <div className="lg:flex lg:h-96 bg-base-100 m-5">
      <div className="lg:w-2/3">
        <Chart />
      </div>
      <div className="lg:w-1/3 mx-auto ">
        <Traffic />
      </div>
    </div>
  );
};

export default Banner;
