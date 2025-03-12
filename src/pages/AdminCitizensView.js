import Layout from "../components/Layout"
import CitizensView from "../components/CitizensView"

export default function AdminCitizensView(){
    return(
        <div className=" w-[100%] flex">
            <Layout activePage="citizens">
                <CitizensView/>
            </Layout>
        </div>
    )
}