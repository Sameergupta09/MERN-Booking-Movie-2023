// IMPORT HOOKS
import { memo } from "react";
import { useDispatch } from "react-redux";
// IMPORT REDUX
import { updateOneUser } from "../../../redux/actions/authActions";
// IMPORT UI
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function InfoForm({ userInfo }) {
  // DEFINE
  const dispatch = useDispatch();
  const initialValues = {
    name: userInfo.name,
    phone: userInfo.phone,
    gender: userInfo.gender,
    cardId: userInfo.cardId,
    email: userInfo.email,
    password: userInfo.password,
  };
  const submitForm = async (values) => {
    await dispatch(updateOneUser(userInfo._id, values));
    toast.success("Information updated successfully!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };
  const validate = (values) => {
    let errors = {};
    // PHONE
    const regex =
      /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
    if (!regex.test(values.phone)) {
      errors.phone = "! Incorrect phone number";
    }
    // ID CARD
    if (values.cardId.length !== 9) {
      errors.cardId = "! Incorrect ID number";
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
          <form
            className="mt-10 text-sm lg:text-[15px]"
            onSubmit={handleSubmit}
          >
            <h1 className="text-white text-sm lg:text-[15px] mb-5">
            BASIC INFORMATION
            </h1>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
              >
                Member name
              </label>
              <input
                type=""
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className=" block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none "
              />
            </div>
            <div className="mb-4 flex items-center">
              <div className="mr-2 w-[70%]">
                <label
                  htmlFor="cardId"
                  className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                >
                  ID number
                </label>
                <input
                  value={values.cardId}
                  onChange={handleChange}
                  id="cardId"
                  name="cardId"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none"
                />
                {errors.cardId && touched.cardId && (
                  <span className="text-red-500 text-[14px]">
                    {errors.cardId}
                  </span>
                )}
              </div>
              <div className="ml-3 w-[30%]">
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                >
                  Sex
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  className="form-select appearance-none
                            block
                            w-full
                            px-4
                            py-2.5
                            text-sm 
                            font-medium
                            text-gray-300
                            bg-transparent bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-300 focus:bg-black bg-white focus:outline-none"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                  --- Select gender ---
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="Email"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                disabled
                value={values.email}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-500 bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
              >
               Phone number
              </label>
              <input
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none"
              />
              {errors.phone && touched.phone && (
                <span className="text-red-500 text-[14px]">{errors.phone}</span>
              )}
            </div>

            <button
              type="submit"
              className="py-1 text-[14px] px-2 text-white bg-[#ce0000]"
            >
              <div className="buttons">
                <button className="btn">
                  <span></span>
                  <p
                    data-start="good luck!"
                    data-text="Continue!"
                    data-title="Save changes"
                  ></p>
                </button>
              </div>
            </button>
            <ToastContainer toastStyle={{ color: "black" }} />
          </form>
        );
      }}
    </Formik>
  );
}

export default memo(InfoForm);
