/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import HeaderPublic from "../components/headerPublic";
import MovieNow from "../movie/homeMovie/movieNowList";
import MovieSoon from "../movie/homeMovie/movieSoonList";
import { Link } from "react-router-dom";
import { getAllBlog } from "../../../redux/actions/blogActions";
import { getAllEvent } from "../../../redux/actions/eventActions";
import SpinnerLoading from "../components/spinnerLoading";
import { useSelector, useDispatch } from "react-redux";
import FooterPublic from "../components/footerPublic";
import Blogs from "../blog&event/blogs";
import Events from "../blog&event/events";
import slide1 from "../../../assets/slide_1.webp";
import slide2 from "../../../assets/slide_2.jpg";
import slide3 from "../../../assets/slide_3.png";
import Data from "../components/TranslationEnglish/Data.json";

function HomePage() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  const events = useSelector((state) => state.events.events);
  const [loadingPage, setLoadingPage] = useState(false);
  const [stateMovie, setStateMovie] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [content, setContent] = useState("");
  const language = useSelector((state) => state.language.language);

  const handleClickMovie = useCallback(() => {
    setStateMovie(!stateMovie);
  }, [stateMovie]);

  const slides = [
    {
      url: `${slide2}`,
      content: {
        h2: "LOOKING FORWARD TO THE RETURN OF A NEW ERA",
        h3: "TRANSFORMERS",
        h4: "THE LAST KNIGHT",
        rating: "8.5/10",
        discription:
          "The Last Knight is the next installment of the popular Transformers series. 'The Last Knight' shatters the core myths of the Transformers franchise and redefines what it means to be a hero. Humans and Transformers are at war, and Optimus Prime is missing. The key to saving our future is buried in the secrets of the past, in the hidden history of Transformers on Earth.",
        btn: "COMING SOON",
      },
    },
    {
      url: `${slide1}`,
      content: {
        h2: "TOP GROSSING MOVIES IN CINEMAS",
        h3: "TOP GUN - MAVERICK",
        rating: "8.7/10",
        discription:
          "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
        btn: "BOOK NOW",
      },
    },
    {
      url: `${slide3}`,
      content: {
        h2: "A HORROR MASTERPIECE FROM NEW LINE CINEMA",
        h3: "IT - THE EVIL CLOWN",
        rating: "7.7/10",
        discription:
          "One of the most anticipated horror films of the year, the movie is adapted from Stephen King's scariest novel, delivering even more terrifying scenes and a direct look at the evil clown Pennywise. After 17 years since its first appearance in the TV adaptation, viewers can scream once again as Pennywise returns in a more sinister, brutal, and horrifying way on the big screen.",
        btn: "BOOK NOW",
      },
    },
  ];
  
  // Back Slide
  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);
  // Next Slide
  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadingPage(true);
    let timeOut = setTimeout(async () => {
      setLoadingPage(false);
      await dispatch(getAllBlog());
      await dispatch(getAllEvent());
    }, 1200);
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

  // useEffect(() => {
  //   setTimeout(() => {
  //     const isLastSlide = currentIndex === slides.length - 1;
  //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //     setCurrentIndex(newIndex);
  //   }, 5000);
  // })

  return (
    <div>
      {loadingPage === true ? (
        <SpinnerLoading />
      ) : (
        <div>
          <div className="h-screen w-full group">
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="w-full h-full bg-center bg-cover duration-500"
            >
              <div className="bg-gradient-to-r from-black/100 h-screen w-full">
                <HeaderPublic />
                <div className="relative lg:mt-28 mt-16">
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className="absolute z-10 text-white translate-x-[-50%] top-[25%] lg:top-[50%] left-8 md:left-12 lg:left-20 w-[80%] lg:w-[50%]"
                  >
                    <h2 className="lg:text-[15px] text-sm">
                      {slides[currentIndex].content.h2}
                    </h2>
                    <h3 className="lg:text-[40px] md:text-[28px] text-[20px] font-bold my-2">
                      {slides[currentIndex].content.h3}
                    </h3>
                    <h4 className="lg:text-[40px] md:text-[28px] text-[20px] font-bold my-2">
                      {slides[currentIndex].content.h4}
                    </h4>
                    {slides[currentIndex].content.rating !== "" ? (
                      <button className="bg-[#c40404] lg:text-[14px] text-[12px] rounded-full p-2 lg:p-3 mb-2">
                        {slides[currentIndex].content.rating}{" "}
                        <i className="fas fa-star"></i>
                      </button>
                    ) : (
                      <></>
                    )}
                    <p className="lg:block md:text-[13px] lg:text-[16px] font-thin text-[12px] text-justify">
                      {slides[currentIndex].content.discription}
                    </p>
                    <Link to="/booking">
                      <button className="py-2 text-[12px] lg:text-[14px] px-2 lg:px-3 bg-[#c40404] mt-3 md:mt-5">
                        {slides[currentIndex].content.btn} &ensp;
                        <i className="fas fa-chevron-right text-[12px]"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] lg:left-5 left-0 text-xl lg:text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <button onClick={prevSlide}>
                <i className="fas fa-chevron-left text-[20px]"></i>
              </button>
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] lg:right-5 right-0 lg:text-xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <button onClick={nextSlide}>
                <i className="fas fa-chevron-right text-[20px]"></i>
              </button>
            </div>
          </div>
          {/* content */}
          <div className="mx-auto px-2 lg:px-[50px] bg-black">
            <div>
              <div className="flex justify-between">
                <div className="text-white">
                  <button
                    className="md:mx-3 mx-2 text-[13px] lg:text-[15px] py-[20px] uppercase border-[#E50914]"
                    onClick={handleClickMovie}
                    style={{
                      borderBottom:
                        stateMovie === true ? "3px solid #E50914" : "none",
                    }}
                  >
                    {content === ""
                      ? "Now Showing"
                      : content.title.titleMovieNow}
                  </button>
                  <button
                    className="md:mx-3 ml-2 py-[20px] text-[13px] lg:text-[15px] uppercase"
                    onClick={handleClickMovie}
                    style={{
                      borderBottom:
                        stateMovie === false ? "3px solid #E50914" : "none",
                    }}
                  >
                    {content === ""
                      ? "Coming Soon"
                      : content.title.titleMovieSoon}
                  </button>
                </div>
                <div className="py-[5px] text-white">
                  <p className="w-[120px] brightness-200 h-10 bg-[url('https://www.galaxycine.vn/website/images/ic_hotnews.png')]"></p>
                  <Link to="/movie-now/63b93dfd1d4172de899ce6ca">
                    <p className="text-zinc-400 text-[12px] lg:text-[17px]">
                      Avatar: The Way Of Water
                    </p>
                  </Link>
                </div>
              </div>
              {/* RENDER PHIM ĐANG CHIẾU OR PHIM SẮP CHIẾU */}
              {stateMovie === true ? <MovieNow /> : <MovieSoon />}
              <div className="pt-20">
                <button
                  disabled
                  className="text-white py-[17px] uppercase text-[15px] border-b-[3px] border-[#E50914]"
                >
                  {content === "" ? "review phim" : content.title.blogfilm}
                </button>
                <div className="grid lg:grid-cols-2 grid-cols-1 py-10 gap-4">
                  {blogs.map((blog, index) => (
                    index < 6 &&
                    <Blogs key={blog._id} blog={blog} />
                  ))}
                </div>
                <div
                data-aos="fade-up"
                data-aos-duration="1500"
                >
                  <div className="flex justify-center mt-5">
                    <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
                      <Link to="/blog&event">
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
              {/* sự kiện */}
              <div className="pt-5">
                <button
                  disabled
                  className="text-white py-[17px] uppercase text-[15px] border-b-[3px] mb-10 border-[#E50914]"
                >
                  {content === "" ? "Promotional news" : content.title.event}
                </button>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-10">
                  {events.map((event) => (
                    <Events key={event._id} event={event} />
                  ))}
                </div>
                <div>
                  <div className="flex justify-center mt-5">
                    <button className="py-1 text-[14px] px-2 text-white bg-[#ce0000]">
                      <Link to="/blog&event">
                        <div className="buttons">
                          <button className="btn">
                            <span></span>
                            <p
                              data-start="good luck!"
                              data-text="Let's go!"
                              data-title="see more"
                            ></p>
                          </button>
                        </div>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>

              {/* về chúng tôi */}
              <div className="py-5">
                <button className="text-white py-[17px]  text-[15px] border-b-[3px] mb-10 border-[#E50914]">
                  REACT FLIX
                </button>
                <p className="text-gray-400 text-sm lg:text-[15px] text-justify">
                    &ensp;React Flix is one of the first independent film companies founded in 2003,
                    establishing itself as one of the top 10 most popular entertainment venues.
                    In addition to its modern cinema system, which attracts millions of viewers,
                    React Flix also impresses audiences with its friendly atmosphere and top-quality service.
                    On the website galaxycine.vn, customers can easily explore the best movies, 
                    the latest releases, and upcoming films, all of which are frequently updated. 
                    The showtimes at all React Flix cinema locations are also updated daily, hourly, 
                    on the homepage.
                    <br></br>
                    &ensp;From the Marvel Cinematic Universe, fans will reconnect with Spider-Man 
                    in Spider-Man: No Way Home or Doctor Strange 2. In addition, 007: No Time To Die, 
                    Turning Red, Minions: The Rise of Gru, and more are promising works that are 
                    expected to make a huge impact at the box office in the near future. Now, booking 
                    tickets at React Flix is easier than ever with just a few simple steps. To buy tickets, 
                    go to the "Buy Tickets" tab. You can choose to buy tickets by movie, theater, or date. 
                    Then, follow the steps to complete the purchase. In just a few minutes, you will receive a confirmation message and email from React Flix. You can use the message to collect tickets at the React Flix counter or scan the QR code to enter the cinema without any further steps.
                    <br></br>
                    &ensp;If you’ve already chosen a great movie to watch, you can book tickets 
                    quickly using the "Quick Ticket" box

                </p>
              </div>
            </div>
          </div>
          <FooterPublic />
        </div>
      )}
    </div>
  );
}

export default HomePage;
