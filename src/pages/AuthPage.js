import Banner from "../components/Banner"
import AuthForm from "../components/AuthForm"
export default function AuthPage(){
    return (
      <>
        <div className="auth-page flex w-[100%] h-[100%]">
          <Banner />
          <AuthForm />
        </div>
      </>
    );

}