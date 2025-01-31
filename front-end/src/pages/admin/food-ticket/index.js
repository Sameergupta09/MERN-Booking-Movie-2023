import NavBars from "../components/navBars";
import SideBars from "../components/sideBars";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllFood, deleteOneFood } from "../../../redux/actions/foodActions";
import { getAllTicket } from "../../../redux/actions/ticketActions";

function ManageCombo() {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foods.foods);
  const tickets = useSelector((state) => state.tickets.tickets);
  const [size, setSize] = useState(null);
  const [id, setId] = useState("");
  const [newFoods, setNewFoods] = useState([]);
  const [newTickets, setNewTickets] = useState([]);
  const handleOpen = useCallback((value, id) => {
    setSize(value);
    setId(id);
  }, []);
  const handleDeleteFood = (id) => {
    dispatch(deleteOneFood(id));
    setSize(null); //DISMISS MODAL
    setNewFoods(foods.filter((item) => item._id !== id)); //AFTER DELETE SAVE INTO NEW RESERVATION
    toast.success("1 theater deleted!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  };
  useEffect(() => {
    dispatch(getAllFood());
    dispatch(getAllTicket());
  }, [dispatch]);
  useEffect(() => {
    setNewFoods(foods);
    setNewTickets(tickets);
  }, [foods, tickets]);
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
              Manage utility packages
              </h1>
              <div>
                <div className="flex justify-start mt-5">
                  <div className="rounded-lg shadow-2xl text-center mr-2 p-5">
                    <h1>COMBO PACKAGE</h1>
                    <p className="text-[35px] py-4 font-bold">
                      {newFoods.length}
                    </p>
                    <Link to="add-food">
                      <button className="p-2 text-green-500">
                        <i className="fas fa-plus"></i>&ensp;Add new
                      </button>
                    </Link>
                  </div>
                  <div className="rounded-lg shadow-2xl text-center mr-2 p-5">
                    <h1>MOVIE TICKETS</h1>
                    <p className="text-[35px] py-4 font-bold">
                      {newTickets.length}
                    </p>
                    <Link to="add-ticket">
                      <button className="p-2 text-green-500">
                        <i className="fas fa-plus"></i>&ensp;Add new
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="mt-5 px-2 py-4 rounded-lg shadow-xl">
                  <div>
                    <h2 className="py-3 mt-3 font-medium">
                    List of utility packages
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
                                    Combo type
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center uppercase "
                                  >
                                    Price
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center uppercase "
                                  >
                                    Describe
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
                                {newFoods
                                  .slice()
                                  .reverse()
                                  .map((food, index) => (
                                    <>
                                      <tr key={index}>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">
                                          {food._id}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                          {food.typeFood}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                          {(food.price * 1000).toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                                        </td>
                                        <td className="px-4 py-4 text-sm text-center capitalize whitespace-nowrap">
                                          {food.discription}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                          <Link to={`edit-food/${food._id}`}>
                                            <button className="px-2 text-blue-600">
                                            Update
                                            </button>
                                          </Link>

                                          <button
                                            onClick={() =>
                                              handleOpen("sm", food._id)
                                            }
                                            className="px-2 text-red-500"
                                          >
                                            Erase
                                          </button>
                                        </td>
                                      </tr>
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
                    List of movie tickets
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
                                    Ticket code
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center uppercase "
                                  >
                                    Ticket type
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center uppercase "
                                  >
                                    Price
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-center uppercase "
                                  >
                                    Describe
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
                                {newTickets
                                  .slice()
                                  .reverse()
                                  .map((ticket, index) => (
                                    <>
                                      <tr key={index}>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">
                                          {ticket._id}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                          {ticket.typeTicket}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                          {(ticket.price * 1000).toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                                        </td>
                                        <td className="px-4 py-4 text-sm text-center capitalize whitespace-nowrap">
                                          {ticket.discription}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                                          <button className="px-2 text-blue-600">
                                          Update
                                          </button>

                                          <button className="px-2 text-red-500">
                                          Erase
                                          </button>
                                        </td>
                                      </tr>
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
                DELETE COMBO PACKAGE
                </h2>
              </DialogHeader>
              <DialogBody divider>
                <div className="mb-5 w-full">
                  <p className="my-2 text-[#000000]">
                  Are you sure you want to delete this package?
                  </p>
                </div>
              </DialogBody>
              <DialogFooter>
                <button
                  className="px-6 my-5 py-2 text-sm text-white bg-[#c40404]"
                  onClick={() => handleDeleteFood(id)}
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

export default ManageCombo;
