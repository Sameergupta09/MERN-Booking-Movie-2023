import { Link } from "react-router-dom";
import NavBars from "../components/navBars";
import SideBars from "../components/sideBars";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useState, memo } from "react";
import { deleteOneUser, getAllUser } from "../../../redux/actions/authActions";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ManageUser() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [size, setSize] = useState(null);
  const [id, setId] = useState("");
  const [isSearching, setIsSearching] = useState("");
  const [searchUser, setSearchUser] = useState([]);
  const handleOpen = useCallback((value, id) => {
    setSize(value);
    setId(id);
  }, []);
  const handleDeleteUser = (id) => {
    dispatch(deleteOneUser(id));
    setSize(null); //DISMISS MODAL
    setSearchUser(users.filter((item) => item._id !== id)); //AFTER DELETE SAVE INTO NEW RESERVATION
    toast.success("User removed from system!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  };
  const handleFilter = (e) => {
    setIsSearching(e.target.value);
    setSearchUser(
      users.filter((entry) =>
        Object.values(entry).some(
          (val) =>
            typeof val === "string" &&
            val.toLowerCase().includes(isSearching.toLowerCase())
        )
      )
    );
  }
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  useEffect(() => {
    setSearchUser(users)
  }, [users]);
  return (
    <>
      <div className="grid grid-cols-10">
        <div className="col-span-2 border-r max-h-max border-gray-500 text-[15px]">
          <SideBars />
        </div>
        <div className="col-span-8">
          <NavBars />
          <ToastContainer toastStyle={{ color: "black" }} />
          <div className="m-5">
            <h1 className="font-bold text-[35px] uppercase">
            SYSTEM ACCOUNT MANAGEMENT
            </h1>

            <div className="flex justify-start mt-5">
              <div className="rounded-lg shadow-2xl text-center mr-2 p-5">
                <h1>CUSTOMER ACCOUNT NUMBER</h1>
                <p className="text-[35px] py-4 font-bold">
                  {searchUser.filter((item) => item.position === "").length}
                </p>
              </div>
              <div className="rounded-lg shadow-2xl text-center mr-2 p-5">
                <h1>EMPLOYEE ACCOUNT NUMBER</h1>
                <p className="text-[35px] py-4 font-bold">
                  {
                    searchUser.filter((item) => item.position === "Staff")
                      .length
                  }
                </p>
              </div>
            </div>
            <div className="my-5">
              <Link to="create-user">
                <button className="bg-[#cf1111] text-[13px] text-white py-2 px-6 rounded-md">
                Add account
                </button>
              </Link>
            </div>
            <div className="flex  mt-5 justify-between">
              <h2 className="py-2 font-medium">Customer List</h2>
              <input
                type="text"
                onChange={handleFilter}
                className="px-2 border focus:outline-none text-sm border-gray-700 text-black placeholder:text-gray-400"
                placeholder="Tìm kiếm người dùng"
              />
            </div>
            <div className="mt-3 shadow-2xl">
              <div className="overflow-x-auto">
                <div className="w-full inline-block align-middle">
                  <div className="overflow-auto rounded-xl">
                    <table className="min-w-full text-black">
                      <thead className="bg-[#206cb391]">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left uppercase "
                          >
                            Customer code
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Customer name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Registration date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Establish
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {searchUser
                          .slice()
                          .reverse()
                          .map((user, index) => (
                            <>
                              {user.position === "Khách Hàng" ||
                              user.position === "" ? (
                                <tr key={index}>
                                  <td className="px-6 py-4 text-sm whitespace-nowrap">
                                    {user._id}
                                  </td>
                                  <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                    {user.name}
                                  </td>
                                  <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                    {user.createdAt}
                                  </td>
                                  <td className="px-4 py-4 text-sm text-center lowercase whitespace-nowrap">
                                    {user.email}
                                  </td>
                                  <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                    <Link to={`update-user/${user._id}`}>
                                      <button className="px-2 text-blue-600">
                                      Detail
                                      </button>
                                    </Link>

                                    <button
                                      onClick={() => handleOpen("sm", user._id)}
                                      className="px-2 text-red-500"
                                    >
                                      Erase
                                    </button>
                                  </td>
                                </tr>
                              ) : (
                                <></>
                              )}{" "}
                            </>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="py-3 mt-3 font-medium">List of employees</h2>
            <div className="mt-3 shadow-2xl">
              <div className="overflow-x-auto">
                <div className="w-full inline-block align-middle">
                  <div className="overflow-auto rounded-xl">
                    <table className="min-w-full text-black">
                      <thead className="bg-[#206cb391]">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left uppercase "
                          >
                            Employee code
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Employee Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Registration date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Establish
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {searchUser
                          .slice()
                          .reverse()
                          .map((user, index) => (
                            <>
                              {user.position === "Nhân Viên" ? (
                                <tr key={index}>
                                  <td className="px-6 py-4 text-sm whitespace-nowrap">
                                    {user._id}
                                  </td>
                                  <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                    {user.name}
                                  </td>
                                  <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                    {user.createdAt}
                                  </td>
                                  <td className="px-4 py-4 text-sm text-center lowercase whitespace-nowrap">
                                    {user.email}
                                  </td>
                                  <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                    <Link to={`update-user/${user._id}`}>
                                      <button className="px-2 text-blue-600">
                                      Detail
                                      </button>
                                    </Link>

                                    <button
                                      onClick={() => handleOpen("sm", user._id)}
                                      className="px-2 text-red-500"
                                    >
                                      Erase
                                    </button>
                                  </td>
                                </tr>
                              ) : (
                                <></>
                              )}
                            </>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dialog
          open={size === "sm"}
          size={size || "sm"}
          handler={handleOpen}
          style={{ borderRadius: "0px" }}
        >
          <DialogHeader>
            <h2 className="text-sm lg:text-[17px] text-[#c40404] font-bold">
            DELETE USER
            </h2>
          </DialogHeader>
          <DialogBody divider>
            <div className="mb-5 w-full">
              <p className="my-2 text-[#000000]">
              Are you sure you want to delete this user?
              </p>
            </div>
          </DialogBody>
          <DialogFooter>
            <button
              className="px-6 my-5 py-2 text-sm text-white bg-[#c40404]"
              onClick={() => handleDeleteUser(id)}
            >
              Continue
            </button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}

export default memo(ManageUser);
