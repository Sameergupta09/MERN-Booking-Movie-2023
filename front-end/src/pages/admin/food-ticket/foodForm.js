function FoodForm({
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    ToastContainer,
    errors,
  }) {
    return (
      <>
        <form className="px-10 py-3" onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label className="text-sm mt-2 font-medium text-black" htmlFor="typeFood">
          Combo type name
          </label>
          <input
            type="text"
            name="typeFood"
            id="typeFood"
            value={values.typeFood}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
          />
        </div>
        <div className="mb-3 ">
          <label className="text-sm mt-2 font-medium text-black" htmlFor="price">
          Select price - 1000 VND
          </label>
          <input
            type="number"
            name="price"
            id="price"
            min="10"
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
          />
        </div>
        <div className="mb-3 ">
          <label className="text-sm mt-2 font-medium text-black" htmlFor="quantity">
          Quantity
          </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={values.quantity}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
          />
        </div>
        <div className="mb-3 ">
          <label className="text-sm mt-2 font-medium text-black" htmlFor="image">
          Image
          </label>
          <input
            type="text"
            name="image"
            id="image"
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
          />
        </div>
        <div className="mb-3 ">
          <label className="text-sm mt-2 font-medium text-black" htmlFor="discription">
          Describe
          </label>
          <input
            type="text"
            name="discription"
            id="discription"
            min="10"
            value={values.discription}
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
  
  export default FoodForm;
  