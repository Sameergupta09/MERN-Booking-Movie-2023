/* eslint-disable react-hooks/exhaustive-deps */
import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getOneMovie, updateOneMovie } from "../../../redux/actions/movieActions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import MovieForm from "./movieForm";

function MovieNowUpdate() {
  const dispatch = useDispatch();
  const movieId = useParams();
  const id = movieId.id;
  const {movie} = useSelector((state) => state.movie);
  const {isUpdated} = useSelector((state) => state.editMovie)
  
  const initialValues = {
    name: movie.name,
    namevn: movie.namevn,
    year: movie.year,
    country: movie.country,
    type: movie.type,
    released: movie.released,
    duration: movie.duration,
    poster: movie.poster,
    image: movie.image,
    bg: movie.bg,
    director: movie.director,
    limitAge: movie.limitAge,
    actors: movie.actors,
    discription: movie.discription,
    trailer: movie.trailer,
  };
  const validate = (values) => {
    let errors = {};
    // tên người dùng
    if (!values.name) {
      errors.name = "! Please enter the movie name";
      } else if (values.name.length > 50) {
      errors.name = "! Movie name must not exceed 50 characters";
      }
      if (!values.namevn) {
      errors.namevn = "! Please enter the Vietnamese name";
      } else if (values.namevn.length > 50) {
      errors.namevn = "! Movie name must not exceed 50 characters";
      }
      if (!values.country) {
      errors.country = "! Please enter the country of production";
      } else if (values.country.length > 50) {
      errors.country = "! Country name must not exceed 50 characters";
      }
      if (!values.type) {
      errors.type = "! Please enter the movie genre";
      } else if (values.type.length > 50) {
      errors.type = "! Genre name cannot exceed 50 characters";
      }
      if (!values.released) {
      errors.released = "! Please select a release date";
      } else if (values.released.length > 12) {
      errors.released = "! Not a date format";
      }
      if (!values.director) {
      errors.director = "! Please enter a director's name";
      } else if (values.director > 50) {
      errors.director = "! Please enter a different name";
      }
      if (!values.poster) {
      errors.poster = "! Please enter a poster link";
      }
      if (!values.image) {
      errors.image = "! Please enter a movie image link";
      }
      if (!values.bg) {
      errors.bg = "! Please enter the background image path";
      }
      if (!values.discription) {
      errors.discription = "! Please enter the movie content";
      } else if (values.discription > 1000) {
      errors.discription = "! Movie content cannot exceed 1000 characters";
      }
      if (!values.trailer) {
      errors.trailer = "! Please enter the trailer embed code";
      }
      return errors;
      };

  const submitForm = async (values) => {
    dispatch(updateOneMovie(movie._id, values))
    if(isUpdated){
      toast.success("A movie has been added to the now showing section!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    })}
  };
  useEffect(() => {
    dispatch(getOneMovie(id));
  }, []);
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
      enableReinitialize
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
        } = formik;
        return (
          <div>
            <div className="grid grid-cols-10">
              <div className="col-span-2 border-r max-h-max border-gray-500 text-[15px]">
                <SideBars />
              </div>
              <div className="col-span-8">
                <NavBars />
                <div>
                  <div className="m-5">
                    <h1 className="font-bold text-[35px] uppercase">
                    Update movies currently showing
                    </h1>
                  </div>
                  <MovieForm ToastContainer={ToastContainer} touched={touched} errors={errors} handleSubmit={handleSubmit} handleChange={handleChange} handleBlur={handleBlur} values = {values}/>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default memo(MovieNowUpdate);
