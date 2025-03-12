import "../styles/Layout.css"
import { Children } from "react"
import Header from "./Header"
import SideBar from "./SideBar"
import { useState } from "react"


export default function Layout({activePage, children}){
    const [sidebar, isSidebar] = useState(false);

    function toggleSidebar() {
      isSidebar(!sidebar);
      console.log(sidebar);
    }
    return (
      <div className=" w-[100vw] flex">
        <SideBar toggleSidebar={toggleSidebar} sidebar={sidebar} activePage={activePage}/>
        <main className="layout dash-main bg-[#1c1c1c] h-[100vh] flex-1 overflow-y-auto">
          <Header toggleSidebar={toggleSidebar} sidebar={sidebar} />
          {children}
        </main>
      </div>
    );
}