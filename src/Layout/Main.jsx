import State from "../pages/Dashboard/state/State";
import logo from "../assets/logo.png";
import { AiFillHome } from "react-icons/ai";
import { MdWidgets } from "react-icons/md";

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
              <div>
                <AiFillHome className="text-white" />
                <a>Over View</a>
              </div>
            </li>
            <li>
              <div>
                <MdWidgets />
                <a>Widgets</a>
              </div>
            </li>
            <li>
              <a>UI Eliments</a>
            </li>
            <li>
              <a>Advanced UI</a>
            </li>
            <li>
              <a>Form Element</a>
            </li>
            <li>
              <a>Editors</a>
            </li>
            <li>
              <a>Charts</a>
            </li>
            <li>
              <a>Tables</a>
            </li>
            <li>
              <a>Popups</a>
            </li>
            <li>
              <a>Notifications</a>
            </li>
            <li>
              <a>Icons</a>
            </li>
            <li>
              <a>Maps</a>
            </li>
            <li>
              <a>User Pages</a>
            </li>
            <li>
              <a>Error Pages</a>
            </li>
            <li>
              <a>E-Commerce</a>
            </li>
            <li>
              <a>E-mail</a>
            </li>
            <li>
              <a>Calendar</a>
            </li>
            <li>
              <a>Todo List</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Documentation</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
