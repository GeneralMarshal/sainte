import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function SideBar(props) {
  const navigate = useNavigate();

  return (
    <div
      className={`sidebar  ${
        props.sidebar ? "sidebar-in" : "sidebar-out"
      } bg-[#1c1c1c] h-[100vh] overflow-y-auto`}
    >
      <p className="sidebar-logo flex justify-between items-center font-[700] text-[40px] text-[#3AE6BD]">
        Sainte
        <IoClose
          className="toggle-icon invisible  mr-[10px] text-[25px] text-[#ffffff]"
          onClick={props.toggleSidebar}
        />
      </p>
      <div className=" user-avatar ">
        <div className="user-pic-div">
          <img
            src="/poeple-pictures/Ellipse 1.png"
            alt=""
            className="user-pic"
          />
        </div>
        <div className="user-prof">
          <p className=" user-name w-[100%]">Jane Dow</p>
          <p className=" user-email">jane.dow@example.com</p>
        </div>
      </div>
      <div
        className={`dash-btn ${
          props.activePage === "dashboard" ? " active-btn" : ""
        }`}
        onClick={() => navigate("/admindashboard")}
      >
        <img
          src="/dashboard-icons/home.svg"
          alt=""
          className=" m-[3px] mr-[13px] "
        />
        Dashboard
      </div>
      <section className="side-nav flex flex-col gap-[45px] my-[60px]">
        <div className="care">
          <p className=" side-nav-h">CARE TEAM</p>
          <ul>
            <li
              className={props.activePage === "citizens" ? " active-btn" : ""}
              onClick={() => navigate("/admincitizens")}
            >
              <img src="/dashboard-icons/chart-bar.svg" alt="" />
              <p>Citizens</p>
            </li>
            <li>
              <img src="/dashboard-icons/user.svg" alt="" />
              <p>Peer mentors</p>
            </li>{" "}
            <li>
              <img src="/dashboard-icons/users.svg" alt="" />
              <p>Parole Officers</p>
            </li>
          </ul>
        </div>
        <div className="analytics">
          <p className=" side-nav-h">ANALYTICS</p>
          <ul>
            <li>
              <img src="/dashboard-icons/vector.svg" alt="" />
              <p>Appointments</p>
            </li>
            <li>
              <img src="/dashboard-icons/calender.svg" alt="" />
              <p>Calender</p>
            </li>{" "}
            <li>
              <img src="/dashboard-icons/attention.svg" alt="" />
              <p>Incident</p>
            </li>
          </ul>
        </div>
        <div className="resources">
          <p className=" side-nav-h">RESOURCES</p>
          <ul>
            <li
              className={`dash-btn ${
                props.activePage === "blog" ? " active-btn" : ""
              }`}
              onClick={() => navigate("/adminblog")}
            >
              <img src="/dashboard-icons/book.svg" alt="" />
              <p>Blog</p>
            </li>
          </ul>
        </div>
      </section>
      <div className=" set-log">
        <ul>
          <li
            className={props.activePage === "settings" ? " active-btn" : ""}
            onClick={() => navigate("/adminsettings")}
          >
            <img src="/dashboard-icons/cog.svg" alt="" />
            <p>Settings</p>
          </li>
          <li>
            <img src="/dashboard-icons/logout.svg" alt="" />
            <p>logout</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
