import { memo } from "react";
function MovieForm({
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
      <div className="grid-cols-10 grid m-5">
        <div className="col-span-4">
          <div
            className="md:mx-6 mx-0 lg:mx-0 xl:mx-6 mt-10 lg:mt-0 h-[100%] lg:h-[70%] bg-cover bg-center"
            style={{ backgroundImage: `url("${values.poster}")` }}
          >
            <div className="bg-gradient-to-r from-black/100 to-black/40  text-black text-sm w-full h-full">
              <div className="px-5 py-10">
                <div className="text-white">
                  <p className="py-1 mt-2 font-medium">
                    <span className="text-gray-400">Movie name:</span>{" "}
                    {values.name}
                  </p>
                  <p className="py-1 mt-2 font-medium">
                  <span className="text-gray-400">Vietnamese name:</span>{" "}
                  {values.namevn}
                  </p>
                  <p className="py-1 mt-2 font-medium">
                  <span className="text-gray-400">Year of manufacture:</span>{" "}
                  {values.year}
                  </p>
                  <p className="py-1 mt-2 font-medium">
                  <span className="text-gray-400">Country:</span>
                  {values.country}
                  </p>
                  <p className="py-1 mt-2 font-medium">
                  <span className="text-gray-400">Genre:</span>
                  {values.type}
                  </p>
                  <p className="py-1 mt-2 font-medium">
                  <span className="text-gray-400">Release Date: </span>
                  {values.released}
                  </p>
                  <p className="py-1">
                  <span className="text-gray-400">Duration: </span>
                  {values.duration}
                  </p>
                  <p className="py-1">
                  <span className="text-gray-400">Director: </span>
                  {values.director}
                  </p>
                  <p className="py-1">
                  <span className="text-gray-400">Age Limit: </span>
                  {values.limitAge}
                  </p>
                  <p className="py-1">
                  <span className="text-gray-400">Director: </span>
                  {values.director}
                  </p>
                  <p className="py-1">
                  <span className="text-gray-400">Cast: </span> 
                  {values.actors}
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 shadow-2xl py-5 px-8">
          <form className="" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="text-sm mt-2 font-medium text-black" htmlFor="name">
              Movie name
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
                <span className="text-red-500 text-[13px]">{errors.name}</span>
              )}
            </div>
            <div className="mb-2">
              <label className="text-sm mt-2 font-medium text-black" htmlFor="namevn">
              Hollywood movie names
              </label>
              <input
                type="text"
                name="namevn"
                id="namevn"
                value={values.namevn}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
              {errors.namevn && touched.namevn && (
                <span className="text-red-500 text-[13px]">
                  {errors.namevn}
                </span>
              )}
            </div>
            <div className="mb-2 grid grid-cols-3 gap-3">
              <div>
                <div>
                  <label className="text-sm mt-2 font-medium text-black" htmlFor="year">
                  Year of manufacture
                  </label>
                  <input
                    type="number"
                    name="year"
                    id="year"
                    value={values.year}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                  />
                  {errors.year && touched.year && (
                    <span className="text-red-500 text-[13px]">
                      {errors.year}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <div className="mb-2">
                  <label className="text-sm mt-2 font-medium text-black" htmlFor="limitAge">
                  Age limit
                  </label>
                  <input
                    type="number"
                    name="limitAge"
                    id="limitAge"
                    value={values.limitAge}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                  />
                  {errors.limitAge && touched.limitAge && (
                    <span className="text-red-500 text-[13px]">
                      {errors.limitAge}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <div className="mb-2">
                  <label className="text-sm mt-2 font-medium text-black" htmlFor="duration">
                  Movie duration
                  </label>
                  <input
                    type="number"
                    name="duration"
                    id="duration"
                    value={values.duration}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                  />
                  {errors.duration && touched.duration && (
                    <span className="text-red-500 text-[13px]">
                      {errors.duration}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-2">
              <label className="text-sm mt-2 font-medium text-black" htmlFor="country">
              Nation
              </label>
              <input
                type="text"
                name="country"
                id="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
              {errors.country && touched.country && (
                <span className="text-red-500 text-[13px]">
                  {errors.country}
                </span>
              )}
            </div>
            <div className="mb-2">
              <label className="text-sm mt-2 font-medium text-black" htmlFor="type">
              Category
              </label>
              <input
                type="text"
                name="type"
                id="type"
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
              {errors.type && touched.type && (
                <span className="text-red-500 text-[13px]">{errors.type}</span>
              )}
            </div>
            <div className="mb-2">
              <label className="text-sm mt-2 font-medium text-black" htmlFor="released">
              Release date
              </label>
              <input
                type="date"
                name="released"
                id="released"
                value={values.released}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
              {errors.released && touched.released && (
                <span className="text-red-500 text-[13px]">
                  {errors.released}
                </span>
              )}
            </div>

            <div className="mb-2">
              <label className="text-sm mt-2 font-medium text-black" htmlFor="poster">
                Poster
              </label>
              <input
                type="text"
                name="poster"
                id="poster"
                value={values.poster}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
              {errors.poster && touched.poster && (
                <span className="text-red-500 text-[13px]">
                  {errors.poster}
                </span>
              )}
            </div>
            <div className="mb-2">
              <label className="text-sm mt-2 font-medium text-black" htmlFor="image">
              Image
              </label>
              <input
                type=""
                name="image"
                id="image"
                value={values.image}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
              {errors.image && touched.image && (
                <span className="text-red-500 text-[13px]">{errors.image}</span>
              )}
            </div>
            <div className="mb-2">
              <label className="text-sm mt-2 font-medium text-black" htmlFor="bg">
              Background image
              </label>
              <input
                type=""
                name="bg"
                id="bg"
                value={values.bg}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
              {errors.bg && touched.bg && (
                <span className="text-red-500 text-[13px]">{errors.bg}</span>
              )}
            </div>
            <div className="mb-2">
              <label className="text-sm mt-2 font-medium text-black" htmlFor="director">
              Director
              </label>
              <input
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
                type=""
                name="director"
                id="director"
                value={values.director}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.director && touched.director && (
                <span className="text-red-500 text-[13px]">
                  {errors.director}
                </span>
              )}
            </div>

            <div className="mb-2">
              <label className="text-sm mt-2 font-medium text-black" htmlFor="actors">
              Performer
              </label>
              <input
                type=""
                name="actors"
                id="actors"
                value={values.actors}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
              {errors.actors && touched.actors && (
                <span className="text-red-500 text-[13px]">
                  {errors.actors}
                </span>
              )}
            </div>
            <div className="mb-2">
              <label className="text-sm mt-2 font-medium text-black" htmlFor="discription">
              Movie content
              </label>
              <input
                type=""
                name="discription"
                id="discription"
                value={values.discription}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
              {errors.discription && touched.discription && (
                <span className="text-red-500 text-[13px]">
                  {errors.discription}
                </span>
              )}
            </div>
            <div className="mb-2">
              <label className="text-sm mt-2 font-medium text-black" htmlFor="trailer">
                Trailer
              </label>
              <input
                type=""
                name="trailer"
                id="trailer"
                value={values.trailer}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full text-black px-4 py-1 text-sm  border-b border-gray-700 bg-transparent focus:border-black focus:ring-black  focus:outline-none"
              />
              {errors.trailer && touched.trailer && (
                <span className="text-red-500 text-[13px]">
                  {errors.trailer}
                </span>
              )}
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
        </div>
      </div>
    </>
  );
}

export default memo(MovieForm);
