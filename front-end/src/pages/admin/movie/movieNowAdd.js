import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { memo } from "react";
import { createMovie } from "../../../redux/actions/movieActions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MovieForm from "./movieForm";

function MovieNowAdd() {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    namevn: "",
    year: 2022,
    country: "",
    type: "",
    released: "",
    duration: 100,
    poster: "",
    image: "",
    bg: "",
    director: "",
    limitAge: 13,
    actors: [],
    discription: "",
    trailer: "",
  };
  const submitForm = async (values, { resetForm }) => {
    await dispatch(createMovie(values));
    resetForm();
    toast.success("A movie has been added to the now playing section!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
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
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
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
                    Add movies currently playing
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

export default memo(MovieNowAdd);
