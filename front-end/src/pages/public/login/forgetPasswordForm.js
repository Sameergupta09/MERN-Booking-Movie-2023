/* eslint-disable react-hooks/exhaustive-deps */
// IMPORT HOOKS
import { useState, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
// IMPORT REDUX
import {
  forgotPassword,
  clearErrors,
} from "../../../redux/actions/authActions";
// IMPORT UI
import { Formik } from "formik";

function ForgetForm({ setIsActive, isActive, setEmail, setSize }) {
  // DEFINE
  const dispatch = useDispatch();
  const { errorChangePw, code } = useSelector((state) => state.user);
  const [stateError, setStateError] = useState("");
  const initialValues = {
    email: "",
  };
  const submitForm = async (values) => {
    await dispatch(forgotPassword(values));
    if (code) {
      setEmail(values.email);
      setIsActive(!isActive);
    }
  };
  // VALIDATE
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!regex.test(values.email)) {
      errors.email = "! Email is incorrect";
    } else if (values.email.length > 30) {
      errors.email = "! Email should not exceed 30 characters";
    }
    return errors;
  };
  // HOOK USEEFFECT
  useEffect(() => {
    if (errorChangePw) {
      setStateError(errorChangePw);
      dispatch(clearErrors(errorChangePw));
    }
  }, [dispatch, errorChangePw]);

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
            data-aos="fade-right"
            data-aos-duration="600"
            className="px-0 md:px-5 lg:px-10 py-3 col-span-2"
            onSubmit={handleSubmit}
          >
            <h1 className="text-[17px] font-medium mb-3">FORGOT PASSWORD</h1>
            <p className="pt-1 text-center text-sm font-medium text-[#e01414]">
              {stateError}
            </p>
            <div className="mb-3 ">
              <label
                className="text-sm mt-2 font-medium text-black"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email"
                className="block w-full text-black px-4 rounded-lg py-2 text-sm  border border-gray-400 bg-transparent focus:border-gray-400 focus:ring-gray-700  focus:outline-none"
              />
              {errors.email && touched.email && (
                <span className="text-red-500 text-[14px]">{errors.email}</span>
              )}
            </div>
            <div className="flex items-end flex-col">
              <p className="py-1 text-center font-medium text-gray-800 text-[11px]">
              The verification code will be sent to your email
              </p>
              <div className="flex">
                <p
                  onClick={() => {
                    setSize(null);
                  }}
                  className="font-medium text-sm cursor-pointer text-black px-5 py-2"
                >
                  Cancel
                </p>
                <button
                  type="submit"
                  className="bg-[#114ecf] text-sm text-white py-2 px-6 rounded-md"
                >
                  Receive code
                </button>
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default memo(ForgetForm);
