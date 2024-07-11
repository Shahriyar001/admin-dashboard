import Chart from "./chartData/Chart";
import Traffic from "./traffic/Traffic";

const Banner = () => {
  return (
    <div className="flex h-96 bg-base-100 m-5">
      <div className="w-2/3">
        <Chart />
      </div>
      <Traffic />
    </div>
  );
};

export default Banner;
