import { Formik } from "formik";
import { memo, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  changePasswordUser,
  authLogout,
} from "../../../redux/actions/authActions";
import Cookies from "universal-cookie";

function ChangePassForm({handleOpenPw}) {
  const initialValues = {
    passwordCurrent: "",
    passwordNew: "",
    passwordNewConfirm: "",
  };
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { error, isChanged } = useSelector((state) => state.newUser);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const [stateErr, setStateErr] = useState("");
  const cookies = new Cookies()
  const adminId = cookies.get("adminId");
  const submitForm = async (values, { resetForm }) => {
    await dispatch(
      changePasswordUser(adminId, values.passwordCurrent, values.passwordNew)
    );
    if (stateErr !== ""){
      resetForm({});
    }
    dispatch(authLogout());
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
  };
  const validate = (values) => {
    let errors = {};
    if (!values.passwordCurrent) {
      errors.passwordCurrent = "! Please enter a password";
      } else if (values.passwordCurrent.length < 6) {
      errors.passwordCurrent = "! Password is too short";
      } else if (values.passwordCurrent.length > 30) {
      errors.passwordCurrent = "! Password cannot exceed 30 characters";
    }
    // new password
    if (!values.passwordNew) {
      errors.passwordNew = "! Please enter a new password";
      } else if (values.passwordNew.length < 6) {
      errors.passwordNew = "! Password is too short";
      } else if (values.passwordNew.length > 30) {
      errors.passwordNew = "! Password cannot exceed 30 characters";
    }
    // confirm new password
    if (values.passwordNew !== values.passwordNewConfirm) {
      errors.passwordNewConfirm = "! Password does not match the password just entered";
    }
    return errors;
  };
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
            <p className="pb-1 font-medium text-red-500">{stateErr}</p>
            <div className="mb-4">
              <label
                htmlFor="currentPass"
                className="text-sm mt-2 font-medium text-black"              >
                Current Password
              </label>
              <input
                type="password"
                name="passwordCurrent"
                id="passwordCurrent"
                value={values.passwordCurrent}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full text-black px-4 py-2 text-sm  border border-gray-800 rounded-lg bg-transparent focus:border-black focus:ring-black  focus:outline-none"
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
                className="text-sm mt-2 font-medium text-black"              >
                New Password
              </label>
              <input
                type="password"
                name="passwordNew"
                id="passwordNew"
                value={values.passwordNew}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full text-black px-4 py-2 text-sm  border border-gray-800 rounded-lg bg-transparent focus:border-black focus:ring-black  focus:outline-none"
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
                className="text-sm mt-2 font-medium text-black"              >
                Confirm Password
              </label>
              <input
                type="password"
                name="passwordNewConfirm"
                id="passwordNewConfirm"
                value={values.passwordNewConfirm}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full text-black px-4 py-2 text-sm  border border-gray-800 rounded-lg bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
              {errors.passwordNewConfirm && touched.passwordNewConfirm && (
                <span className="text-red-500 text-[14px]">
                  {errors.passwordNewConfirm}
                </span>
              )}
            </div>
            <div className="flex justify-end">
                
            <p
                onClick={() => handleOpenPw(null)}
                className="text-[13px] cursor-pointer text-black font-medium py-2 px-6"
              >
                Cancel
              </p>
              <button
                type="submit"
                className="bg-[#cf1111] text-[13px] text-white py-2 px-6 rounded-md"
              >
                Update
              </button>
            </div>
            
          </form>
        );
      }}
    </Formik>
  );
}

export default memo(ChangePassForm);
