import "../styles/Auth.css";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
export default function AuthForm() {
  const [isPasswordVisible, setIsPassword] = useState(false);
  const [isRepeatVisible, setIsRepeat] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  function togglePassword() {
    setIsPassword((password) => !password);
  }
  function toggleRepeat() {
    setIsRepeat((password) => !password); 
  }

  return (
    <div className="form-cont flex    justify-center flex-[45%] bg-[white] ">
      <div className="auth-form mt-[50px] w-[340px]">
        <div className="form-nav ">
          <div
            className={`${isLogin ? "text-[#000000]" : "text-[#828282]"}`}
            onClick={() => setIsLogin(true)}
          >
            Login{" "}
            <span
              className={`${isLogin ? "bg-[#000000]" : "bg-[#828282]"}`}
            ></span>
          </div>
          <div
            className={`${isLogin ? "text-[#828282]" : "text-[#000000]"}`}
            onClick={() => setIsLogin(false)}
          >
            Create account{" "}
            <span
              className={`${isLogin ? "bg-[#828282]" : "bg-[#000000]"}`}
            ></span>
          </div>
        </div>
        <div className="sign-btns">
          <div>
            <img src="login-icons/google.svg" alt="google-icon" />
            <p>Sign in with Google</p>
            <span></span>
          </div>
          <div>
            <img src="login-icons/apple.svg" alt="apple-icon" />
            <p>Sign in with Apple</p>
            <span></span>
          </div>
        </div>
        <div className=".or-divider flex items-center relative ">
          <span className=" w-[100%] h-[1px] bg-[black]"></span>
          <p className=" absolute w-[75px] h-[50px] flex items-center justify-center bg-[white] left-[50%] translate-x-[-50%] text-[16px] font-[600]">
            Or
          </p>
        </div>
        <form action="" className=" in-form">
          <fieldset
            className={`fieldset ${isLogin ? "slide-in" : "slide-out"}`}
          >
            <div className="input-container">
              <label htmlFor="email"> Email</label>
              <input type="email" name="email" placeholder="hello@mail.com" />
            </div>
            <div className="input-container">
              <label htmlFor="password"> Password</label>
              <div className="input-wrapper relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  placeholder="***********"
                />
                {isPasswordVisible ? (
                  <img
                    src="login-icons/blind.png"
                    alt=""
                    className="input-wrapper-img"
                    onClick={() => togglePassword()}
                  />
                ) : (
                  <IoEyeSharp
                    className="input-wrapper-img "
                    style={{ color: "grey", height: "20px" }}
                    onClick={() => togglePassword()}
                  />
                )}
              </div>
            </div>
            {isLogin ? (
              <></>
            ) : (
              <div className="input-container">
                <label htmlFor="password"> Repeat password</label>
                <div className="input-wrapper relative">
                  <input
                    type="password"
                    name="password"
                    placeholder="***********"
                  />
                  {isRepeatVisible ? (
                    <img
                      src="login-icons/blind.png"
                      alt=""
                      className="input-wrapper-img"
                      onClick={() => toggleRepeat()}
                    />
                  ) : (
                    <IoEyeSharp
                      className="input-wrapper-img "
                      style={{ color: "grey", height: "20px" }}
                      onClick={() => toggleRepeat()}
                    />
                  )}
                </div>
              </div>
            )}
          </fieldset>
          <p className=" w-[100%] text-center text-[16px] font-[500]">
            Forgot password?
          </p>
          <button className="auth-btn">Login</button>
        </form>
      </div>
    </div>
  );
}
