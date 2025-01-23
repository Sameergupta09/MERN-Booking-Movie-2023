/* eslint-disable react-hooks/exhaustive-deps */
// IMPORT HOOKS
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// IMPORT REDUX
import { getAllBlog } from "../../../redux/actions/blogActions";
import { getAllEvent } from "../../../redux/actions/eventActions";
// IMPORT UI
import { Breadcrumbs } from "@material-tailwind/react";
import Data from "../components/TranslationEnglish/Data.json";
import Events from "./events";
import Blogs from "./blogs";
import SpinnerLoading from "../components/spinnerLoading";
import FooterPublic from "../components/footerPublic";
import HeaderPublic from "../components/headerPublic";

function BlogAndEvent() {
  // DEFINE
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const events = useSelector((state) => state.events.events);
  const [loadingPage, setLoadingPage] = useState(false);
  const [content, setContent] = useState("");
  const language = useSelector((state) => state.language.language);
  // HOOK
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      await dispatch(getAllBlog());
      await dispatch(getAllEvent());
      setLoadingPage(false);
    }, 1300);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  useEffect(() => {
    if (language === "English") {
      setContent(Data.english);
    } else {
      setContent("");
    }
  }, [language]);
  return (
    <>
      <div className="bg-black max-h-full">
        <HeaderPublic />
        {loadingPage === true ? (
          <SpinnerLoading />
        ) : (
          <div>
            <div className="lg:px-16 px-5 py-10 lg:py-20 text-white max-h-full">
              <Breadcrumbs className="bg-transparen p-0 mb-3">
                <Link to="/home" className="text-gray-400">
                  {content === "" ? "Home" : content.blog.linkHome}
                </Link>
                <Link className="text-gray-200">
                  {content === ""
                    ? "Cinema Corner & Events."
                    : content.blog.link}
                </Link>
              </Breadcrumbs>
              <div className="text-white max-h-full w-full">
                <button
                  disabled
                  className="text-white uppercase text-[15px] pr-6 py-[15px] mb-5  border-b-[3px] border-[#E50914]"
                >
                  {content === "" ? "Cinema blog" : content.blog.blog}
                </button>
                <div className="grid grid-cols-1 lg:grid-cols-2 py-10 gap-4">
                  {blogs.map((blog) => (
                    <Blogs key={blog._id} blog={blog} />
                  ))}
                </div>
              </div>
              <div className="flex justify-center py-10">
                <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
                  <div className="buttons">
                    <button className="btn">
                      <span></span>
                      <p
                        data-start="good luck!"
                        data-text="Let's go!"
                        data-title="Xem thêm"
                      ></p>
                    </button>
                  </div>
                </button>
              </div>
              <button
                disabled
                className="text-white uppercase text-[15px] pr-6 py-[15px] mb-5  border-b-[3px] border-[#E50914]"
              >
                {content === "" ? "Event" : content.blog.event}
              </button>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-2 2xl:grid-cols-4 gap-5 lg:gap-4">
                {events.map((event) => (
                  <Events key={event._id} event={event} />
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
                  <Link>
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
                  </Link>
                </button>
              </div>
            </div>
                <div className="lg:px-16 p-5 text-white max-h-full w-full">
                <button className="text-white py-[17px] text-[15px] border-b-[3px] mb-10 border-[#E50914]">
                  REACT FLIX
                </button>
                <p className="text-gray-400 text-sm lg:text-[15px] text-justify">
                  &ensp;React Flix is one of the first independent film companies established in 2023, having established itself as one of the top 10 most popular entertainment venues. In addition to its modern cinema system, which attracts millions of viewers, React Flix also captivates audiences with its friendly atmosphere and top-tier service quality. On the React Flix website, customers can easily find the best films, the latest ones showing, or upcoming films, which are regularly updated. The schedule for all React Flix cinemas is also fully updated every day and every hour on the homepage.
                  <br></br>
                  &ensp;From the Marvel Cinematic Universe, fans will reunite with Spider-Man through Spider-Man: No Way Home or Doctor Strange 2. Additionally, 007: No Time To Die, Turning Red, Minions: The Rise of Gru..., are promising films that are expected to dominate the box office soon. Now, booking tickets at React Flix is even easier with just a few simple steps. To buy tickets, go to the "Buy Tickets" tab. You can choose to buy tickets by film, theater, or date. Then, proceed to buy tickets following the instructions. In just a few minutes, you will receive a confirmation message and email for your successful booking from React Flix. You can use the message to pick up your tickets at the React Flix box office or scan the QR code to enter the cinema without any further steps.
                  <br></br>
                  &ensp; If you have already chosen a great film to watch, you can quickly book tickets using the "Quick Ticket Purchase" box right from the homepage. In just a minute, you will receive the confirmation message and email from Galaxy Cinema straight to your phone and inbox. If you're still undecided about which movie to watch, check out the great films in the "Currently Showing" and "Upcoming Films" sections at the cinema by visiting the "Film Reviews" section in the Cinema Corner to read the most genuine reviews, browse, and consider. Afterward, simply book your tickets using the "Quick Ticket Purchase" box at the top of the page to choose your desired showtime and seat. React Flix always offers attractive promotions, discounts, free movie tickets, combo gifts, and movie-related gifts for customers.
                </p>
              </div>

            <div className="py-10"></div>
            <FooterPublic />
          </div>
        )}
      </div>
      
    </>
  );
}

export default BlogAndEvent;
