import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import NavBars from "../components/navBars";
import SideBars from "../components/sideBars";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { getAllUser } from "../../../redux/actions/authActions";
import { getAllReservation } from "../../../redux/actions/reservationActions";
import { Link } from "react-router-dom";
function Dashboard() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  let [countTotal, setCountTotal] = useState(0);
  const reservations = useSelector((state) => state.reservations.reservations);
  const data = [
    { name: "Jan", Total: 0, User: 0 },
    { name: "Feb", Total: 100, User: 1000 },
    { name: "Mar", Total: countTotal, User: users.length },
  ];
// const user = [
//     { name: "Tháng 1", Total: 0 },
//     { name: "Tháng 2", Total: 1000 },
//     { name: "Tháng 3", Total: users.length },
//   ];
  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(getAllUser());
    dispatch(getAllReservation());
  }, [dispatch]);
  useEffect(() => {
    let total = 0;
    reservations.map((reservation) => (total = total + reservation.total));
    setCountTotal(total);
  }, [reservations]);
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-2 w-full border-r max-h-max border-gray-500 text-[15px]">
        <SideBars />
      </div>
      <div className="col-span-8">
        <NavBars />
        <div className="m-5">
          <div className="grid grid-cols-3 gap-5 text-sm">
            <div className="p-3 border-none shadow-xl rounded-xl">
              <div className="flex justify-between">
                <h1>REGISTERED USERS</h1>
                <p className="text-green-500">
                  <i className="fas fa-caret-up"></i>&ensp;{users.length-1}
                </p>
              </div>

              <p className="text-[35px] py-4 font-bold">
                {1000 + users.length-1}
              </p>
              <div className="flex justify-between">
                <Link to="/admin/users">
                  <p className="pt-2 border-b border-gray-700">View list</p>
                </Link>
                <div className="bg-red-400 p-2 rounded-lg">
                  <i className="fas fa-user"></i>
                </div>
              </div>
            </div>
            <div className="p-3 border-none shadow-xl rounded-xl">
              <div className="flex justify-between">
                <h1>NUMBER OF TICKETS SOLD</h1>
                <p className="text-green-500">
                  <i className="fas fa-caret-up"></i>&ensp;{reservations.length}
                </p>
              </div>
              <p className="text-[35px] py-4 font-bold">
                {reservations.length}
              </p>
              <div className="flex justify-between">
                <Link to="/admin/receipts">
                  <p className="pt-2 border-b border-gray-700">View list</p>
                </Link>
                <div className="bg-green-400 py-2 px-2 rounded-lg">
                  <i className="fas fa-ticket-simple"></i>
                </div>
              </div>
            </div>
            <div className="p-3 border-none shadow-xl rounded-xl">
              <h1>DOANH THU TRONG THÁNG 3</h1>
              <p className="text-[35px] py-4 font-bold">
                {(countTotal*1000).toLocaleString('vi', {style : 'currency', currency : 'VND'})}
              </p>
              <div className="flex justify-between">
                <p className="pt-2 border-b border-gray-700">View list</p>
                <div className="bg-blue-400 p-2 rounded-lg">
                  <i className="fas fa-money-bill"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-10 mt-10 gap-3">
            <div className="p-3 flex flex-col items-center col-span-3 text-center rounded-xl shadow-xl">
              <h1 className="font-medium text-[18px]">
              TOTAL REVENUE IN THE 1ST QUARTER OF 2023
              </h1>
              <p className="text-sm">&#40; Unit: Thousand Dong &#41;</p>
              <div className="p-5" style={{ width: 200, height: 200 }}>
                <CircularProgressbar
                  value={Math.floor(countTotal*1000/20000000 * 100)}
                  text={`${Math.floor(countTotal*1000/20000000 * 100)}%`}
                  strokeWidth={2}
                />
              </div>
              <p className="text-sm">
                Current count{" "}
                <span className="font-medium">{(countTotal*1000 + 100000).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
                </p>
                <p className="text-sm">
                Target{" "}
                <span className="font-medium">{(20000000).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
                </p>
                <p className="text-sm">
                Total revenue from ticket sales compared to target
              </p>
              <button className="py-2 mt-2 px-4 bg-black text-sm text-white font-medium">Lập Báo Cáo</button>
            </div>
            <div className="p-3 col-span-7 shadow-2xl rounded-lg">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Total"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="User"
                    stroke="#82ca9d"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="p-3 mt-5 rounded-lg shadow-xl">
            <h1 className="text-[18px] font-medium ">RECENT TRANSACTIONS</h1>
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
                            Transaction code
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
                            Transaction date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Total payment
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center uppercase "
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {reservations.slice().reverse().map((reservation, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 text-sm whitespace-nowrap">
                              {reservation._id}
                            </td>
                            <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                              {reservation.author.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-center capitalize whitespace-nowrap">
                              {reservation.createdAt}
                            </td>
                            <td className="px-6 text-center py-4 text-sm whitespace-nowrap">
                              {(reservation.total*1000).toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                            </td>
                            <td className="px-6 text-center py-4 text-green-700 text-sm whitespace-nowrap">
                            Paid
                            </td>
                          </tr>
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
  );
}

export default Dashboard;
