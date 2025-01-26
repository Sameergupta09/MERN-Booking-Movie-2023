// IMPORT HOOKS
import { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// IMPORT REDUX
import { getAllMovie } from "../../../redux/actions/movieActions";
// IMPORT UI
import SpinnerLoading from "../components/spinnerLoading";
import HeaderPublic from "../components/headerPublic";
import FooterPublic from "../components/footerPublic";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Breadcrumbs,
} from "@material-tailwind/react";
import SupportForm from "./SupportForm";
import Data from "../components/TranslationEnglish/Data.json";

function Support() {
  // DEFINE
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const [isActive, setIsActive] = useState("1");
  const [content, setContent] = useState("");
  const language = useSelector((state) => state.language.language);
  const [loadingPage, setLoadingPage] = useState(false);
  const handleClickActive = (e) => {
    setIsActive(e.target.value);
  };
  const [openAccordion, setOpenAccordion] = useState(1);

  const handleOpenAccordion = (value) => {
    setOpenAccordion(openAccordion === value ? 0 : value);
  };
  // HOOK
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      await dispatch(getAllMovie());
      setLoadingPage(false);
    }, 1200);
    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch]);
  useEffect(() => {
    if (language === "English") {
      setContent(Data.english);
    } else {
      setContent("");
    }
  }, [language]);
  return (
    <>
      <div className="bg-black min-h-screen max-h-full">
        <HeaderPublic />
        {loadingPage === true ? (
          <SpinnerLoading />
        ) : (
          <div>
            <div className="lg:m-16 my-10 mx-5 grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2 mr-3">
                <Breadcrumbs className="bg-transparen p-0 my-5">
                  <Link to="/home" className="text-gray-400">
                    {content === "" ? "Home" : content.support.linkHome}
                  </Link>
                  <Link className="text-gray-400">
                    {content === ""
                      ? "Support for comments"
                      : content.support.linkSp}
                  </Link>
                  <Link className="text-gray-200">
                    {content === "" ? "Comments" : content.support.feedback}
                  </Link>
                </Breadcrumbs>
                <div>
                  <button
                    style={{ background: isActive === "1" ? "#E50914" : "" }}
                    value="1"
                    onClick={handleClickActive}
                    className="py-2 px-4 text-sm uppercase text-white rounded-md ease-in-out duration-500"
                  >
                    {content === "" ? "Comments" : content.support.feedback}
                  </button>
                  <button
                    value="2"
                    style={{ background: isActive === "2" ? "#E50914" : "" }}
                    onClick={handleClickActive}
                    className="py-2 px-4 text-sm uppercase text-white rounded-md ease-in-out duration-500"
                  >
                    {content === "" ? "answer" : content.support.answer}
                  </button>
                </div>
                {isActive === "1" && <SupportForm />}

                {isActive === "2" && (
                  <div className="my-5">
                    <Accordion open={openAccordion === 1}>
                      <AccordionHeader
                        className="text-gray-400  text-sm lg:text-[16px]"
                        onClick={() => handleOpenAccordion(1)}
                      >
                        Can I use my membership account to purchase group tickets?
                      </AccordionHeader>
                      <AccordionBody className="text-gray-500">
                      You can provide the barcode on the mobile app/membership
                       card during the group ticket purchase transaction to
                        accumulate points, however, each account only applies
                         the maximum member ticket price of 8 tickets/day.
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={openAccordion === 2}>
                      <AccordionHeader
                        className="text-gray-400  text-sm lg:text-[16px]"
                        onClick={() => handleOpenAccordion(2)}
                      >
                        What is the system's ticket booking process?
                      </AccordionHeader>
                      <AccordionBody className="text-gray-500">
                        <span className="text-red-500">Step 1: </span>
                        <p>
                        You access Galaxy's Website/App, log in to 
                        your member account before purchasing tickets 
                        so that the system can accumulate points into 
                        your member account.
                        </p>
                        <br></br>
                        <span className="text-red-500">Step 2:</span>
                        <p>
                        You go to Buy tickets for Website/select Movie currently showing for App, you select Theater - select Movie - select Showtime - select Maximum number of seats 8 seats for one
transaction/Combo popcorn - select Seat - proceed to payment
.
                        </p>
                        <br></br>
                        <span className="text-red-500">Step 3:</span>
                        <p>
                        At the payment step, you fill in the information that has been provided previously to test the system. Then you can make payment in many forms.
                        </p>{" "}
                        <br></br>
                        <span className="text-red-500">Step 4: </span>
                        <p>
                        After 5 minutes you will be taken to your ticket bag page.
                        You can check the information again and remember to take a QR code to
                        get your ticket at the counter.
                        </p>
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={openAccordion === 3}>
                      <AccordionHeader
                        className="text-gray-400  text-sm lg:text-[16px]"
                        onClick={() => handleOpenAccordion(3)}
                      >
                        How to give feedback or complaint to the system?
                      </AccordionHeader>
                      <AccordionBody className="text-gray-500">
                        <p>
                        You can go to the support section on the website by filling in your personal information and your errors or suggestions.
                        Then click send for the system to record or you can contact via the system's Email and the website's hotline.
                        </p>
                      </AccordionBody>
                    </Accordion>
                  </div>
                )}
              </div>
              <div>
                <button className="my-5 uppercase lg:mt-0 lg:ml-8 text-white text-sm lg:text-[15px] py-[10px] border-b-[3px] border-[#E50914]">
                  {content === ""
                    ? "phim đang chiếu"
                    : content.movie.titleMovieNow}
                </button>
                <div className="grid grid-cols-1 ml-0 lg:ml-8 mb-5">
                  {movies.map((movie, index) => (
                    <div key={movie._id}>
                      {index < 4 && (
                        <div className="">
                          <div className="relative">
                            <img
                              className="w-[370px] bg-cover"
                              src={movie.image}
                              alt=""
                            ></img>
                            <Link to={`/movie-now/${movie._id}`}>
                              <div className="absolute max-w-[370px] opacity-0 hover:opacity-100 transition duration-500 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
                                <Link to="/booking">
                                  <button
                                    className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-200
                            border text-sm border-white py-[13px] px-[20px] hover:bg-[#E50914] hover:border-none"
                                  >
                                    BUY TICKETS
                                  </button>
                                </Link>
                              </div>
                            </Link>
                          </div>
                          <div className="text-[15px] my-2">
                            <p className="text-white uppercase">{movie.name}</p>
                            <p className="text-gray-500 uppercase">
                              {movie.namevn}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex justify-center ml-2 lg:ml-8 pt-5">
                    <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
                      <Link to="/movie">
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
              </div>
            </div>
            <div className="pb-20"></div>
            <FooterPublic />
          </div>
        )}
      </div>
    </>
  );
}

export default memo(Support);
