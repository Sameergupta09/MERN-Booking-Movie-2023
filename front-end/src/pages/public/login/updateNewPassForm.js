/* eslint-disable react-hooks/exhaustive-deps */
// IMPORT HOOKS
import { useDispatch } from "react-redux";
// IMPORT REDUX
import { updateNewPasswordUser } from "../../../redux/actions/authActions";
// IMPORT UI
import { Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateNewPassForm({
  codeConfirm,
  email,
  setCodeConfirm,
  isActive,
  setIsActive,
}) {
  // DEFINE
  const dispatch = useDispatch();
  const initialValues = {
    email: email,
    password: "",
    confirmPassword: "",
    code: "",
  };
  const submitForm = async (values, { resetForm }) => {
    dispatch(updateNewPasswordUser(email, values.password));
    resetForm({ password: "", confirmPassword: "", code: "" });
    toast.success("New password updated successfully!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  };
  const validate = (values) => {
    let errors = {};
    // PASSWORD
    if (!values.password) {
      errors.password = "! Please enter a password";
    } else if (values.password.length < 6) {
      errors.password = "! Password is too short";
    } else if (values.password.length > 30) {
      errors.password = "! Password cannot exceed 30 characters";
    }
    // CONFIRM PASSWORD
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "! The password does not match the previously entered password";
    }
    if (!values.code) {
      errors.code = "! You have not entered a verification code";
    }
    if (values.code !== codeConfirm.code) {
      errors.code = "! The verification code is incorrect";
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
            data-aos="fade-left"
            data-aos-duration="700"
            className="px-0 md:px-2 lg:px-10 py-3 col-span-2"
            onSubmit={handleSubmit}
          >
            <h1 className="text-[17px] font-medium mb-3">Forgot password</h1>
            <div className="mb-3">
              <label
                className="text-sm mt-2 font-medium text-black"
                htmlFor="password"
              >
                Enter new password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="New Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full text-black px-4 rounded-lg py-2 text-sm  border border-gray-400 bg-transparent focus:border-gray-400 focus:ring-gray-700  focus:outline-none"
              />
              {errors.password && touched.password && (
                <span className="text-red-500 text-[13px]">
                  {errors.password}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label
                className="text-sm mt-2 font-medium text-black"
                htmlFor="confirmPassword"
              >
                Re-enter password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Re-enter password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full text-black px-4 rounded-lg py-2 text-sm  border border-gray-400 bg-transparent focus:border-gray-400 focus:ring-gray-700  focus:outline-none"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <span className="text-red-500 text-[13px]">
                  {errors.confirmPassword}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label
                className="text-sm mt-2 font-medium text-black"
                htmlFor="code"
              >
                Verification code
              </label>
              <input
                type="number"
                name="code"
                id="code"
                value={values.code}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-[50%] lg:w-[40%] text-black px-4 rounded-lg py-2 text-sm  border border-gray-400 bg-transparent focus:border-gray-400 focus:ring-gray-700  focus:outline-none"
              />
              {errors.code && touched.code && (
                <span className="text-red-500 text-[13px]">{errors.code}</span>
              )}
            </div>
            <div className="flex justify-end">
              <p
                onClick={() => {
                  setIsActive(!isActive) && setCodeConfirm("");
                }}
                className="font-medium text-sm cursor-pointer text-black px-4 py-2"
              >
                Go back
              </p>
              <button
                type="submit"
                className="bg-[#114ecf] text-sm text-white py-2 px-6 rounded-md"
              >
                Update
              </button>
            </div>
            <ToastContainer toastStyle={{ color: "black" }} />
          </form>
        );
      }}
    </Formik>
  );
}

export default UpdateNewPassForm;
