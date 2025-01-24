/* eslint-disable react-hooks/exhaustive-deps */
//IMPORT HOOKS
import { useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
// IMPORT COMPONENTS
import ForgetForm from "./forgetPasswordForm";
import UpdateNewPassForm from "./updateNewPassForm";
import FooterPublic from "../components/footerPublic";
import Logo from "../../../assets/mylogo.png";
import LoginForm from "./loginForm";
import RegisterForm from "./RegisterForm";
//IMPORT LIBRARY UI
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, DialogBody } from "@material-tailwind/react";

export default function Login() {
  // DEFINE
  const { isChanged } = useSelector((state) => state.newUser);
  const { code } = useSelector((state) => state.user);
  const [size, setSize] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [codeConfirm, setCodeConfirm] = useState("");
  const [email, setEmail] = useState("");
  const handleOpen = useCallback((value) => {
    setSize(value);
  }, []);
  // HOOK USEEFFECT
  useEffect(() => {
    window.scrollTo(0, 0);
    if (isChanged === true) {
      toast.success(
        "Password updated successfully - Please log in again !",
        {
          position: toast.POSITION.BOTTOM_LEFT,
          className: "text-black",
        }
      );
    }
  }, []);
  useEffect(() => {
    setCodeConfirm(code);
  }, [code]);
  // MAIN COMPONENT
  return (
    <>
      <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/e39414f0-9714-4480-8e82-119dc943cfc1/VN-vi-20221219-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover w-full h-screen relative">
        <div className="bg-black/[0.65] min-h-screen max-h-full">
          <div className="flex justify-between p-6 bg-transparent">
            <img
              src={Logo}
              alt="Logo"
              className="lg:w-[200px] md:w-[170px] w-[150px]"
            />
            <div>
              <button
                className="
                        py-1 px-3
                        text-white border-2
                        border-gray-50
                        bg-transparent
                        text-sm
                        lg:text-[15px]
                        rounded
                        "
              >
                {/* <i className="fas fa-globe"></i>&ensp; Indiana */}
              </button>
            </div>
          </div>
          {/* -----------HEADER LOGIN PAGE-------------- */}
          <div className="md:left-[50%] left-[30%] text-center text-white translate-x-[-20%]  md:translate-x-[-50%] absolute top-[25%]">
            <h2 className="lg:text-[40px] md:text-[35px] text-[30px] font-bold">
            SELECTED FROM THE MOST DISTINCTIVE CINEMA MOVIES
            </h2>
            <p className="lg:text-[18px] text-[15px] mt-5 px-3 md:px-5">
            Do you have an account to book tickets? Quickly register as a member to receive many benefits
            </p>
            <div className="mt-5 flex justify-center">
              <a href="#login">
                <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
                  <div className="buttons">
                    <button className="btn">
                      <span></span>
                      <p
                        data-start="good luck!"
                        data-text="Start"
                        data-title="Explore"
                      ></p>
                    </button>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*-----------------FORM LOgin---------------- */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4 p-4 text-white bg-black h-full">
        <div className="relative lg:block hidden ">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="absolute translate-x-[-40%] top-[25%] left-[20%]"
          >
            <h1 className="text-[35px] font-medium">
              EXCLUSIVE OFFERS FOR SYSTEM MEMBERS
            </h1>
            <p className="text-[20px] my-4">
              Become a member of the system to receive many benefits. Accumulate R-start points for a chance to win exciting prizes.
            </p>

            <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
              <div className="buttons">
                <button className="btn">
                  <span></span>
                  <p
                    data-start="good luck!"
                    data-text="Let's go!"
                    data-title="See more"
                  ></p>
                </button>
              </div>
            </button>
          </div>
        </div>
        <LoginForm handleOpen={handleOpen} />
      </div>
      {/*-----------------FORM registor---------------- */}
      <div className="grid lg:grid-cols-2 grid-cols-1  gap-x-4 p-4  text-white bg-black h-full">
        <RegisterForm />
        <div className="relative lg:block hidden">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="absolute translate-x-[40%] top-[18%] right-[20%]"
          >
            <h1 className="text-[35px] font-medium">
            Online registration on multiple platforms
            </h1>
            <p className="text-[20px] mt-4">
            The system always supports member registration on various platforms
            </p>
            <img
              className="w-[400px]"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ab36101/nmhp/vn.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <div className="py-10 text-white flex flex-col items-center bg-black">
      <h2 className="text-[35px] uppercase">Experience now before it's too late!!!</h2>
      <p className="text-[20px] text-gray-300">Save your favorite content easily and always have something to watch.</p>

        <img
          className="w-[400px]"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
        ></img>
      </div>
      <Dialog
        open={size === "lg"}
        size={size || "lg"}
        handler={handleOpen}
        style={{ borderRadius: "0px" }}
      >
        <DialogBody>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-2 lg:gap-x-3">
            <div>
              <img
                className="h-[200px] w-full md:w-[300px] lg:w-[400px]"
                src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?w=2000"
                alt=""
              />
            </div>
            {isActive === true ? (
              <ForgetForm
                setEmail={setEmail}
                setSize={setSize}
                setCodeConfirm={setCodeConfirm}
                isActive={isActive}
                setIsActive={setIsActive}
              />
            ) : (
              <UpdateNewPassForm
                setSize={setSize}
                email={email}
                setCodeConfirm={setCodeConfirm}
                isActive={isActive}
                setIsActive={setIsActive}
                codeConfirm={codeConfirm}
              />
            )}
          </div>
        </DialogBody>
      </Dialog>
      <FooterPublic />
    </>
  );
}
