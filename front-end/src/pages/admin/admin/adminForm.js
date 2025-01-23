/* eslint-disable react-hooks/exhaustive-deps */
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { getOneUser, updateOneUser } from "../../../redux/actions/authActions";
import Cookies from "universal-cookie";

function AdminForm({ handleOpen }) {
  const dispatch = useDispatch();
  const cookies = new Cookies()
  const adminId = cookies.get("adminId");
  const user = useSelector((state) => state.userInfo.userInfo);
  const initialValues = {
    name: user.name,
    phone: user.phone,
    email: user.email,
    password: user.password,
    cardId: user.cardId,
    position: user.position,
    gender: user.gender,
  };
  const submitForm = async (values) => {
    dispatch(updateOneUser(user._id, values));
    toast.success("Admin information updated successfully!", {
      position: toast.POSITION.BOTTOM_LEFT,
      className: "text-black",
    });
  };
  const validate = (values) => {
    let errors = {};
    return errors;
  };

  useEffect(() => {
    dispatch(getOneUser(adminId));
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
          //errors,
          //touched,
          handleBlur,
        } = formik;
        return (
          <form className="px-10 py-3" onSubmit={handleSubmit}>
            <div className="mb-3 ">
              <label
                className="text-sm mt-2 font-medium text-black"
                htmlFor="name"
              >
                Admin Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
            </div>
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
                required
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
            </div>
            <div className="mb-3 ">
              <label
                className="text-sm mt-2 font-medium text-black"
                htmlFor="password"
              >
                Password
              </label>
              <input
                disabled
                type="text"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
            </div>
            <div className="mb-3 ">
              <label
                className="text-sm mt-2 font-medium text-black"
                htmlFor="phone"
              >
                Phone number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="mb-3">
                <label
                  className="text-sm mt-2 font-medium text-black"
                  htmlFor="gender"
                >
                  Sex
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-select appearance-none
                                  block
                                  w-full
                                  px-4
                                  py-3
                                  mt-3
                                  text-sm 
                                  text-black
                                  bg-transparent bg-clip-padding bg-no-repeat
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-black bg-white focus:outline-none"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="mb-3">
                <label
                  className="text-sm mt-2 font-medium text-black"
                  htmlFor="position"
                >
                  Position
                </label>
                <select
                  id="position"
                  name="position"
                  disabled
                  value={values.position}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-select appearance-none
                                  block
                                  w-full
                                  px-4
                                  py-3
                                  mt-3
                                  text-sm 
                                  text-black
                                  bg-transparent bg-clip-padding bg-no-repeat
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-black bg-white focus:outline-none"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                  Select position
                  </option>
                  <option value="staff">Staff</option>
                  <option value="Client">Client</option>
                  <option value="Admin">Administrator</option>
                </select>
              </div>
            </div>
            <div className="mb-3 ">
              <label
                className="text-sm mt-2 font-medium text-black"
                htmlFor="cardId"
              >
                ID number
              </label>
              <input
                type="text"
                name="cardId"
                id="cardId"
                value={values.cardId}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
            </div>
            <div className="flex justify-end mt-5">
              <p
                onClick={() => handleOpen(null)}
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
              <ToastContainer toastStyle={{ color: "black" }} />
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default AdminForm;
