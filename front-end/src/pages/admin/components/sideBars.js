import { Link } from "react-router-dom";
import Logo from "../../../assets/mylogo.png";

function SideBars() {
  return (
    <div className="px-3 w-[20%] fixed top-0">
      <div className="flex justify-center p-8">
        <img
          className="lg:h-8 lg:w-[150px] h-5 w-[100px]"
          src={Logo}
          alt="Workflow"
        />
      </div>
      <div className="mt-2">
        <h2 className="font-medium text-sm text-gray-600">HOME</h2>
        <div className="flex flex-col items-start">
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/dashboard">
              <i className="fas fa-chart-line"></i>&emsp;Dashboard
            </Link>
          </button>
        </div>
      </div>
      <div className="mt-2">
        <h2 className="font-medium text-sm text-gray-600">MOVIE</h2>
        <div className="flex flex-col items-start">
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/movie">
              <i className="fas fa-film"></i>&emsp; Movie Management
            </Link>
          </button>
        </div>
      </div>
      <div className="mt-2">
        <h2 className="font-medium text-sm text-gray-600">THEATER</h2>
        <div className="flex flex-col items-start">
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/cinema">
              <i className="fas fa-house-laptop"></i>&ensp;Theater Management
            </Link>
          </button>
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/food-ticket">
              <i className="fas fa-house-laptop"></i>&ensp;Combo Packages and Tickets
            </Link>
          </button>
        </div>
      </div>
      <div className="mt-2">
        <h2 className="font-medium text-sm text-gray-600">SHOWING SCHEDULE</h2>
        <div className="flex flex-col items-start">
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/showtime">
              <i className="fas fa-solid fa-business-time"></i>&ensp;Manage
              showtime
            </Link>
          </button>
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/seat">
              <i className="fas fa-solid fa-business-time"></i>&ensp;Manage
              projection room
            </Link>
          </button>
        </div>
      </div>
      <div className="mt-2">
        <h2 className="font-medium text-sm text-gray-600">BLOG & EVENTS</h2>
        <div className="flex flex-col items-start">
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/blog">
              <i className="fas fa-blog"></i>&emsp;Movie Blog
            </Link>
          </button>
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/event">
              <i className="fas fa-calendar-days"></i>&emsp;Event
            </Link>
          </button>
        </div>
      </div>
      <div className="mt-2">
        <h2 className="font-medium text-sm text-gray-600">USER</h2>
        <div className="flex flex-col items-start">
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/users">
              <i className="fas fa-users"></i>&ensp;Account Management
            </Link>
          </button>
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/receipts">
              <i className="fas fa-solid fa-file-invoice"></i>&emsp;Management
              single
            </Link>
          </button>
          <button className="py-1 pl-8 hover:bg-gray-800 hover:text-white hover:w-full">
            <Link to="/admin/feedback">
              <i className="fas fa-solid fa-comments"></i>&ensp;Feedback
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBars;
