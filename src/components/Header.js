import "../styles/AdminDashboard.css"
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";



export default function Header(props){
     const [inbox, setInbox] = useState(2);
     const [notification, setNotification] = useState(6);
    return (
         

      <header>
        <div className="nav flex items-center justify-between cursor-pointer">
          <IoMdMenu className="toggle-icon invisible text-[20px]" onClick={props.toggleSidebar} />
          <div className="notification flex justify-end gap-[10px]">
            <div>
              <img src="/dashboard-icons/envelope.svg" alt="" />
              {inbox && inbox > 0 ? (
                <span className="inbox-no bg-[#3ae6bd]">{inbox}</span>
              ) : (
                ""
              )}
            </div>
            <div>
              <img src="/dashboard-icons/bell.svg" alt="" />
              {notification && notification > 0 ? (
                <span className="not-no bg-[#828282]">{notification}</span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </header>
    );
}