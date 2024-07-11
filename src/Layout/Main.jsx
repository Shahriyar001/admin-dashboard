import State from "../pages/Dashboard/state/State";
import logo from "../assets/logo.png";

const Main = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content overflow-hidden">
          {/* main content  */}
          <State />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="dashboard-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="p-3 flex justify-center bg-gradient-to-r from-bg-red to-secondary text-white">
            <div className="flex py-2">
              <img src={logo} alt="logo" className="w-8 mx-2" />
              <h2 className="text-xl font-bold">Dashboard</h2>
            </div>
          </div>
          <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
