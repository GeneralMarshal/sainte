import "../styles/AdminDashboard.css"
import SideBar from "../components/SideBar"
import DashMain from "../components/DashMain"
import { useState } from "react";


export default function AdminDashboard(){
    const [sidebar, isSidebar] = useState(false);

    function toggleSidebar() {
      isSidebar(!sidebar);
      console.log(sidebar);
    }
    return (
      <div className=" w-[100vw] flex">
         <SideBar toggleSidebar={toggleSidebar} sidebar={sidebar}/> 
        <DashMain toggleSidebar={toggleSidebar} sidebar={sidebar} />
      </div>
    );
}