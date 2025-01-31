import { memo } from "react";
function CinemaForm({
  values,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  ToastContainer,
  errors,
  cinemas,
}) {
  return (
    <>
      <form className="px-10 py-3" onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label className="text-sm mt-2 font-medium text-black" htmlFor="area">
          Area
          </label>
          <select
            id="area"
            name="area"
            value={values.area}
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
            Select area
            </option>
            <option value="ulhas city">ulhasnagar</option>
            <option value="ambarnath city">Ambarnath</option>
            <option value="kalyan city">kalyan</option>
          </select>
        </div>
        <div className="mb-3 ">
          <label className="text-sm mt-2 font-medium text-black" htmlFor="name">
          Theater name
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
            htmlFor="address"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
          />
        </div>
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="bg-[#cf1111] text-[13px] text-white py-2 px-6 rounded-md"
          >
            INITIALIZATION
          </button>
          <ToastContainer toastStyle={{ color: "black" }} />
        </div>
      </form>
    </>
  );
}

export default memo(CinemaForm);
