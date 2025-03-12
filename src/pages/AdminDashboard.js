import "../styles/AdminDashboard.css"
import Layout from "../components/Layout";
import SideBar from "../components/SideBar"
import DashMain from "../components/DashMain"
import { useState } from "react";


export default function AdminDashboard(){

    return (
      
      <div className=" w-[100vw] flex">

        <Layout activePage="dashboard">
          <DashMain/>
        </Layout>
      </div>
    );
}