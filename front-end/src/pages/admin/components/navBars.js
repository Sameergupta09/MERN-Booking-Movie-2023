import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../../redux/actions/authActions";
import AdminForm from "../admin/adminForm";
import ChangePwForm from "../admin/changePwForm";
import Cookies from "universal-cookie";

function NavBars() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies()
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const adminName = cookies.get("admin");
  const [size, setSize] = useState(null);
  const handleOpen = useCallback((value) => {
    setSize(value);
  }, []);
  const [sizePw, setSizePw] = useState(null);
  const evt = localStorage.getItem('eventDay') === undefined ? [] : JSON.parse(localStorage.getItem('eventDay'));
  const handleOpenPw = useCallback((value) => {
    setSizePw(value);
  }, []);
  const handleLogout = async () => {
    await dispatch(authLogout());
    cookies.remove("admin");
    cookies.remove("adminId");
    cookies.remove("token-admin");
  };
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/");
    }
  }, [isAuthenticated, navigate, user]);

  return (
    <div className="flex justify-end border-b border-gray-400 px-5 py-1">
      <div className="flex flex-row items-center justify-end">
        <div className="mr-1">
          <div className="px-3">
            <i className="fas fa-globe"></i> En&ensp;|&ensp;Vn
          </div>
        </div>
        <div className="mr-1">
          <div className="px-1">
            <Link to="/admin/calendar">
              <div className="relative p-3">
              <i className="fas fa-calendar-day"></i>
              <span className="absolute top-0 text-[13px] right-0 px-[6px] rounded-full text-white bg-red-700">
                {evt.length}
              </span>
          </div>
            </Link>
          </div>
        </div>
        <div className="mr-5">
          <div className="p-3">
            <i className="fas fa-bell"></i>
          </div>
        </div>
        <Menu>
          <MenuHandler>
            <Avatar
              size="sm"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="avatar"
              className="cursor-pointer"
            />
          </MenuHandler>
          <MenuList className="text-black">
            <MenuItem>
              Hi, <span className="capitalize font-medium">{adminName}</span>
            </MenuItem>
            <MenuItem onClick={() => handleOpen("lg")}>
            Admin information
            </MenuItem>
            <MenuItem onClick={() => handleOpenPw("sm")}>Đổi mật khẩu</MenuItem>
            <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
          </MenuList>
        </Menu>
        <Dialog
          open={size === "lg"}
          size={size || "lg"}
          handler={handleOpen}
          style={{ borderRadius: "0px" }}
        >
          <DialogHeader>
            <h2 className="text-sm lg:text-[17px] text-[#c40404] font-bold">
            ADMINISTRATOR INFORMATION
            </h2>
          </DialogHeader>
          <DialogBody divider>
            <div className="mb-5 w-full">
              <AdminForm handleOpen={handleOpen} />
            </div>
          </DialogBody>
        </Dialog>
        <Dialog
          open={sizePw === "sm"}
          size={sizePw || "sm"}
          handler={handleOpenPw}
          style={{ borderRadius: "0px" }}
        >
          <DialogHeader>
            <h2 className="text-sm lg:text-[17px] text-[#c40404] font-bold">
            CHANGE ADMINISTRATOR PASSWORD
            </h2>
          </DialogHeader>
          <DialogBody divider>
            <div className="mb-5 w-full">
              <ChangePwForm handleOpenPw={handleOpenPw} />
            </div>
          </DialogBody>
        </Dialog>
      </div>
    </div>
  );
}

export default NavBars;
