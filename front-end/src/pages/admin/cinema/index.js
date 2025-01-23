/* eslint-disable react-hooks/exhaustive-deps */
import NavBars from "../components/navBars";
import SideBars from "../components/sideBars";
import { Link } from "react-router-dom";
import { getAllCinema, deleteOneCinema } from "../../../redux/actions/cinemaActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback, memo } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ManageCinema() {
  const dispatch = useDispatch();
  const cinemas = useSelector((state) => state.cinemas.cinemas);
  const [size, setSize] = useState(null);
  const [id, setId] = useState("");
  const [newCinemas, setNewCinemas] = useState([]);
  const handleOpen = useCallback((value, id) => {
    setSize(value);
    setId(id);
  }, []);
  const handleDeleteCinema = (id) => {
    dispatch(deleteOneCinema(id));
    setSize(null); //DISMISS MODAL
    setNewCinemas(cinemas.filter((item) => item._id !== id)); //AFTER DELETE SAVE INTO NEW RESERVATION
    toast.success("1 theater deleted!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  };
  useEffect(() => {
    dispatch(getAllCinema());
  }, []);
  useEffect(() => {
    setNewCinemas(cinemas);
  }, [cinemas]);
  return (
    <>
      <div>
        <div className="grid grid-cols-10">
          <div className="col-span-2 border-r max-h-max border-gray-500 text-[15px]">
            <SideBars />
          </div>
          <div className="col-span-8">
            <NavBars />
            <ToastContainer toastStyle={{ color: "black" }} />
            <div className="m-5">
              <h1 className="font-bold text-[35px] uppercase">
              Theater Management
              </h1>
              <div>
                <div className="flex justify-start mt-5">
                  <div className="rounded-lg shadow-2xl text-center mr-2 p-5">
                    <h1>NUMBER OF CINEMAS IN THE SYSTEM</h1>
                    <p className="text-[35px] py-4 font-bold">
                      {newCinemas.length}
                    </p>
                    <Link to="add-cinema">
                      <button className="p-2 text-green-500">
                        <i className="fas fa-plus"></i>&ensp;Add new
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="mt-5 px-2 py-4 rounded-lg shadow-xl">
                  <div>
                    <h2 className="py-3 mt-3 font-medium">
                    List of theaters in the area<span>Ulhasnagar city</span>
                    </h2>
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
                                    Theater code
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center uppercase "
                                  >
                                    Theater name
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center uppercase "
                                  >
                                    Area
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center uppercase "
                                  >
                                    Address
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
                                {newCinemas
                                  .slice()
                                  .reverse()
                                  .map((cinema, index) => (
                                    <>
                                      {cinema.area === "ulhas city" ? (
                                        <tr key={index}>
                                          <td className="px-6 py-4 text-sm whitespace-nowrap">
                                            {cinema._id}
                                          </td>
                                          <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                            {cinema.name}
                                          </td>
                                          <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                            {cinema.area}
                                          </td>
                                          <td className="px-4 py-4 text-sm text-center capitalize whitespace-nowrap">
                                            {cinema.address}
                                          </td>
                                          <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                            <Link
                                              to={`edit-cinema/${cinema._id}`}
                                            >
                                              <button className="px-2 text-blue-600">
                                              Update
                                              </button>
                                            </Link>

                                            <button 
                                               onClick={() =>
                                                handleOpen("sm", cinema._id)
                                              }
                                            className="px-2 text-red-500">
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
                </div><div className="mt-5 px-2 py-4 rounded-lg shadow-xl">
                  <div>
                    <h2 className="py-3 mt-3 font-medium">
                    List of theaters in the area <span>Ambarnath city</span>
                    </h2>
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
                                    Theater code
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center uppercase "
                                  >
                                    Theater name
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center uppercase "
                                  >
                                    Area
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center uppercase "
                                  >
                                    Address
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
                                {newCinemas
                                  .slice()
                                  .reverse()
                                  .map((cinema, index) => (
                                    <>
                                      {cinema.area === "Tp.Hồ Chí Minh" ? (
                                        <tr key={index}>
                                          <td className="px-6 py-4 text-sm whitespace-nowrap">
                                            {cinema._id}
                                          </td>
                                          <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                            {cinema.name}
                                          </td>
                                          <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                            {cinema.area}
                                          </td>
                                          <td className="px-4 py-4 text-sm text-center capitalize whitespace-nowrap">
                                            {cinema.address}
                                          </td>
                                          <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                            <Link
                                              to={`edit-cinema/${cinema._id}`}
                                            >
                                              <button className="px-2 text-blue-600">
                                              Update
                                              </button>
                                            </Link>

                                            <button 
                                             onClick={() =>
                                              handleOpen("sm", cinema._id)
                                            }
                                            className="px-2 text-red-500">
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
                <div className="mt-5 px-2 py-4 rounded-lg shadow-xl">
                  <div>
                    <h2 className="py-3 mt-3 font-medium">
                    List of theaters in the area <span>Kalyan</span>
                    </h2>
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
                                    Theater code
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center uppercase "
                                  >
                                    Theater name
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center uppercase "
                                  >
                                    Area
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center uppercase "
                                  >
                                    Address
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
                                {newCinemas
                                  .slice()
                                  .reverse()
                                  .map((cinema, index) => (
                                    <>
                                      {cinema.area === "Cần Thơ" ? (
                                        <tr key={index}>
                                          <td className="px-6 py-4 text-sm whitespace-nowrap">
                                            {cinema._id}
                                          </td>
                                          <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                            {cinema.name}
                                          </td>
                                          <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                            {cinema.area}
                                          </td>
                                          <td className="px-4 py-4 text-sm text-center capitalize whitespace-nowrap">
                                            {cinema.address}
                                          </td>
                                          <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                            <Link
                                              to={`edit-cinema/${cinema._id}`}
                                            >
                                              <button className="px-2 text-blue-600">
                                              Update
                                              </button>
                                            </Link>

                                            <button 
                                             onClick={() =>
                                              handleOpen("sm", cinema._id)
                                            }
                                            className="px-2 text-red-500">
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
                DELETE THEATRE
                </h2>
              </DialogHeader>
              <DialogBody divider>
                <div className="mb-5 w-full">
                  <p className="my-2 text-[#000000]">
                  Are you sure you want to delete this theater?
                  </p>
                </div>
              </DialogBody>
              <DialogFooter>
                <button
                  className="px-6 my-5 py-2 text-sm text-white bg-[#c40404]"
                  onClick={() => handleDeleteCinema(id)}
                >
                  Continue
                </button>
              </DialogFooter>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(ManageCinema);
