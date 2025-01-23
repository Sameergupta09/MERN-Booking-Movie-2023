/* eslint-disable react-hooks/exhaustive-deps */
import { Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../../../redux/actions/blogActions";
import SideBars from "../components/sideBars";
import NavBars from "../components/navBars";

function AddBlogMovie() {
  const dispatch = useDispatch();

  const initialValues = {
    like: 0,
    name: "",
    topContent: "",
    mainContent: "",
    topImage: "",
    mainImage: "",
    comments: [],
  };
  const submitForm = async (values, { resetForm }) => {
    dispatch(createBlog(values));
    toast.success("Blog added successfully!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
    resetForm();
  };
  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "! Please enter blog name";
    } else if (values.name.length > 50) {
      errors.name = "! Blog name cannot exceed 50 characters";
    }
    if (!values.topContent) {
      errors.topContent = "! Please enter a title";
      } else if (values.topContent.length > 50) {
      errors.topContent = "! Title cannot exceed 50 characters";
      }
      if (!values.topImage) {
      errors.topImage = "! Please enter an image path";
      } else if (values.topImage.length > 50) {
      errors.topImage = "! Image path cannot exceed 50 characters";
      }
      if (!values.mainImage) {
      errors.mainImage = "! Please enter an image path";
      } else if (values.mainImage.length > 50) {
      errors.mainImage = "! Image path cannot exceed 50 characters";
      }
    return errors;
  };
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
          <div className="grid grid-cols-10">
            <div className="col-span-2 border-r h-screen border-gray-500 text-[15px]">
              <SideBars />
            </div>
            <div className="col-span-8">
              <NavBars />
              <div>
                <div className="m-5">
                  <h1 className="font-bold text-[35px] uppercase">
                  Add movie blog
                  </h1>
                </div>
                <form
                  className="px-10 m-4 w-[60%] py-3 shadow-2xl"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-3 ">
                    <label
                      className="text-sm mt-2 font-medium text-black"
                      htmlFor="name"
                    >
                      Blog Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                    />
                    {errors.name && touched.name && (
                      <span className="text-red-500 text-[13px]">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="mb-3 ">
                    <label
                      className="text-sm mt-2 font-medium text-black"
                      htmlFor="topContent"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="topContent"
                      id="topContent"
                      value={values.topContent}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                    />
                    {errors.topContent && touched.topContent && (
                      <span className="text-red-500 text-[13px]">
                        {errors.topContent}
                      </span>
                    )}
                  </div>

                  <div className="mb-3 ">
                    <label
                      className="text-sm mt-2 font-medium text-black"
                      htmlFor="topImage"
                    >
                      Theme images
                    </label>
                    <input
                      type="text"
                      name="topImage"
                      id="topImage"
                      value={values.topImage}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                    />
                    {errors.topImage && touched.topImage && (
                      <span className="text-red-500 text-[13px]">
                        {errors.topImage}
                      </span>
                    )}
                  </div>
                  <div className="mb-3 ">
                    <label
                      className="text-sm mt-2 font-medium text-black"
                      htmlFor="mainImage"
                    >
                      Content image
                    </label>
                    <input
                      type="text"
                      name="mainImage"
                      id="mainImage"
                      value={values.mainImage}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                    />
                    {errors.mainImage && touched.mainImage && (
                      <span className="text-red-500 text-[13px]">
                        {errors.mainImage}
                      </span>
                    )}
                  </div>
                  <div className="mb-3 ">
                    <label
                      className="text-sm mt-2 font-medium text-black"
                      htmlFor="mainContent"
                    >
                      Content
                    </label>
                    <textarea
                      type="text"
                      name="mainContent"
                      id="mainContent"
                      cols="10"
                      rows="5"
                      value={values.mainContent}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-end mt-5">
                    <button
                      type="submit"
                      className="bg-[#cf1111] text-[13px] text-white py-2 px-6"
                    >
                      Initialization
                    </button>
                    <ToastContainer toastStyle={{ color: "black" }} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default memo(AddBlogMovie);
