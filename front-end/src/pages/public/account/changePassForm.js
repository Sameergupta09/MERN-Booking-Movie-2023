// IMPORT HOOKS
import { memo, useEffect } from "react";
import { useState } from "react";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// IMPORT REDUX
import {
  changePasswordUser,
  authLogout,
} from "../../../redux/actions/authActions";
// IMPORT UI
import { Formik } from "formik";

function ChangePassForm({ userInfo }) {
  // DEFINE
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const navigator = useNavigate();
  const { error, isChanged } = useSelector((state) => state.newUser);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const [stateErr, setStateErr] = useState("");
  const initialValues = {
    passwordCurrent: "",
    passwordNew: "",
    passwordNewConfirm: "",
  };
  const submitForm = async (values, { resetForm }) => {
    await dispatch(
      changePasswordUser(
        userInfo._id,
        values.passwordCurrent,
        values.passwordNew
      )
    );
    if (stateErr !== "") {
      resetForm({
        passwordCurrent: "",
        passwordNew: "",
        passwordNewConfirm: "",
      });
    }
    dispatch(authLogout());
    cookies.remove("user");
    cookies.remove("userId");
    cookies.remove("token");
  };
  const validate = (values) => {
    let errors = {};
   // CURRENT PASSWORD
if (!values.passwordCurrent) {
  errors.passwordCurrent = "Please enter the password";
} else if (values.passwordCurrent.length < 6) {
  errors.passwordCurrent = "Password is too short!";
} else if (values.passwordCurrent.length > 30) {
  errors.passwordCurrent = "Password must not exceed 30 characters!";
}
// NEW PASSWORD
if (!values.passwordNew) {
  errors.passwordNew = "Please enter the new password!";
} else if (values.passwordNew.length < 6) {
  errors.passwordNew = "New password is too short!";
} else if (values.passwordNew.length > 30) {
  errors.passwordNew = "New password must not exceed 30 characters!";
}
// CONFIRM NEW PASSWORD
if (values.passwordNew !== values.passwordNewConfirm) {
  errors.passwordNewConfirm = "Passwords do not match!";
}
return errors;
  };
  // HOOK
  useEffect(() => {
    if (error) {
      setStateErr(error);
    }
    if (isChanged === true) {
      setStateErr("");
    }
  }, [dispatch, error, isChanged]);
  useEffect(() => {
    if (isAuthenticated === false) {
      navigator("/");
    }
  }, [dispatch, isAuthenticated, navigator, user]);

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
          <form
            className="mt-10 text-sm lg:text-[15px]"
            onSubmit={handleSubmit}
          >
            <h1 className="text-white text-sm lg:text-[15px] mb-5">
            CHANGE PASSWORD
            </h1>
            <p className="pb-1 font-medium text-red-500">{stateErr}</p>
            <div className="mb-4">
              <label
                htmlFor="currentPass"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
              >
                Current password
              </label>
              <input
                type="password"
                name="passwordCurrent"
                id="passwordCurrent"
                value={values.passwordCurrent}
                onChange={handleChange}
                onBlur={handleBlur}
                className=" block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none "
              />
              {errors.passwordCurrent && touched.passwordCurrent && (
                <span className="text-red-500 text-[14px]">
                  {errors.passwordCurrent}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="newPass"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
              >
                New password
              </label>
              <input
                type="password"
                name="passwordNew"
                id="passwordNew"
                value={values.passwordNew}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none"
              />
              {errors.passwordNew && touched.passwordNew && (
                <span className="text-red-500 text-[14px]">
                  {errors.passwordNew}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="comfirmPass"
                className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="passwordNewConfirm"
                id="passwordNewConfirm"
                value={values.passwordNewConfirm}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full px-4 py-2 mt-2 text-white bg-transparent border rounded-md focus:border-white focus:ring-white focus:outline-none"
              />
              {errors.passwordNewConfirm && touched.passwordNewConfirm && (
                <span className="text-red-500 text-[14px]">
                  {errors.passwordNewConfirm}
                </span>
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
                    data-title="Confirm"
                  ></p>
                </button>
              </div>
            </button>
            {/* <ToastContainer  toastStyle={{color: 'black'}} /> */}
          </form>
        );
      }}
    </Formik>
  );
}

export default memo(ChangePassForm);
