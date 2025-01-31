// IMPORT HOOKS
import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie"
// IMPORT REDUX
import { authLogout } from "../../../redux/actions/authActions";
// import { changeLanguage } from "../../../redux/actions/languageAction";
// IMPORT UI
import Data from "./TranslationEnglish/Data.json"
import Logo from "../../../assets/mylogo.png";
import { Transition } from "@headlessui/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

function HeaderPublic() {
  // DEFINE
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies()
  const [isOpen, setIsOpen] = useState(false);
  // const [isActive, setIsActive] = useState(true)
  const [content, setContent] = useState("")
  const language = useSelector(state => state.language.language)
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const userName = cookies.get("user");
  const token = cookies.get("token");
  const userId = cookies.get("userId");
  const handleLogout = () => {
    dispatch(authLogout());
    cookies.remove("user");
    cookies.remove("userId");
    cookies.remove("token");
  };
  // HOOK
  useEffect(() => {
    if (userName === undefined || token === undefined || userId === undefined) {
      navigate("/");
    }
    if(language === "English"){
      setContent(Data.english)
    }else{
      setContent("")
    }
  }, [dispatch, isAuthenticated, language, navigate, token, user, userId, userName]);
  return (
    <div>
      <nav className="bg-transparent">
        <div className="max-w-7xl mx-auto px-3 md:px-4 sm:px-6 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  to="/home"
                >
                  <img className="lg:h-8 lg:w-[150px] h-5 w-[100px]" src={Logo} alt="Workflow" />
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-3">
                  <Link
                    to="/booking"
                    className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
                  >
                    { 
                      content === "" ? 'Buy ticket ': content.navbar.nav1
                    }
                  </Link>
                  <Link
                    to="/movie"
                    className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
                  >
                    { 
                      content === "" ? 'movie' : content.navbar.nav2
                    }
                  </Link>
                  <Link
                    to="/cinema"
                    className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
                  >
                    { 
                      content === "" ? 'Cinema' : content.navbar.nav3
                    }
                  </Link>
                  <Link
                    to="/blog&event"
                    className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
                  >
                    { 
                      content === "" ? 'movie review & event' : content.navbar.nav4
                    }
                  </Link>
                  <Link
                    to="/support"
                    className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
                  >
                    { 
                      content === "" ? 'Support' : content.navbar.nav5
                    }
                  </Link>
                  <Link
                    to="/search"
                    className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
                  >
                    { 
                      content === "" ? 'search' : content.navbar.nav6
                    }
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              {/* <button 
                style={{color: isActive === true ? "red" : ""}}
                onClick={() => {
                  dispatch(changeLanguage("Vietnamese"))
                  setIsActive(!isActive)
                }
              }
              className="text-white text-[11px] md:text-[12px]">
                <i className="fas fa-globe"></i>
                &ensp;VN &ensp;
              </button> */}
              {/* <button 
               
                onClick={() => {
                  dispatch(changeLanguage("English"))
                  setIsActive(!isActive)
                }
              }  
              className="text-white text-[11px] md:text-[12px]">
                | &ensp; 
                <span style={{color: isActive === false ? "red" : ""}}>
                  EN
                </span>
              </button> */}
              <Menu>
                <MenuHandler>
                  <Button className="text-white px-4 ml-0 md:ml-3 py-2 bg-transparent hover:bg-none font-[400] shadow-none text-[14px] capitalize">
                    {userName} &ensp;
                    <i className="fas fa-chevron-down text-[12px]"></i>
                  </Button>
                </MenuHandler>
                <MenuList className="text-black">
                  <MenuItem>
                    <Link to="/account">Personal information</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/user-tickets">Booked ticket</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/account">change password</Link>
                  </MenuItem>
                  <MenuItem
                    className="border-t border-bg-gray-700"
                    onClick={handleLogout}
                  >
                    Log out
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
            <div className="mr-0 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800 focus:outline-none "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="z-50">
        <Transition
          show={isOpen}
          className="bg-black"
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/booking"
                  className="hover:bg-gray-700 text-white block px-3 py-[2px] rounded-md text-sm font-medium"
                >
                  Buy Tickets
                </Link>

                <Link
                   to="/movie"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-[2px] rounded-md text-sm font-medium"
                >
                  Movies
                </Link>

                <Link
                to="/cinema"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-[2px] rounded-md text-sm font-medium"
                >
                  CINEMA
                </Link>

                <Link
                  to="/blog&event"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-[2px] rounded-md text-sm font-medium"
                >
                  MOVIE REVIEW & EVENT
                </Link>

                <Link
                  to="/support"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-[2px] rounded-md text-sm font-medium"
                >
                  SUPPORT
                </Link>
                <Link
                  to="/search"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-[2px] rounded-md text-sm font-medium"
                >
                  SEARCH
                </Link>
              </div>
            </div>
          )}
        </Transition>
        </div>
      </nav>
    </div>
  );
}

export default memo(HeaderPublic);
