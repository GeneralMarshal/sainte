import Layout from "../components/Layout";
import Citizens from "../components/Citizens";

export default function(){
    return(
        <div className=" w-[100vw] flex">
            <Layout activePage="citizens">
                <Citizens/>
            </Layout>
        </div>
    )
}