import Rechart from "./Rechart";

const Chart = () => {
  return (
    <div>
      <div>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="lg:w-9/12">
              <Rechart />
            </div>
            <div className="lg:w-3/12">
              <h3>Dashboard</h3>
              <p>OverView Of last Month</p>
              <div className="my-5">
                <h1 className="text-5xl">$6468.96</h1>
                <p>Current Month Earning</p>
              </div>
              <div className="my-5">
                <h1 className="text-5xl">82</h1>
                <p>Current Month Sales</p>
              </div>
              <button className="btn btn-primary">Last Month Summary</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
