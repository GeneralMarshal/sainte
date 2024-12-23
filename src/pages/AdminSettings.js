import "../styles/AdminSettings.css"
import Layout from "../components/Layout"
import Settings from "../components/Settings";

export default function AdminSettings(){
    return (
      <div className=" w-[100vw] flex">
        <Layout>
          <Settings />
        </Layout>
      </div>
    );
};



