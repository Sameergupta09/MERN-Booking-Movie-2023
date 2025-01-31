import {Link} from 'react-router-dom'
import {memo} from 'react'

function MovieSoon({movie}) {
    return (  
        <>
        <div className="h-96 w-[28.5rem]">
          <div className="relative h-[75%]">
            <img
              className="w-full h-full bg-cover"
              src={movie.image}
              alt=""
            ></img>
            <Link to={`/movie-soon/${movie._id}`}>
              <div className="absolute opacity-0 hover:opacity-100 transition duration-500 ease-in-out top-0 right-0 left-0 bottom-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
                <button
                  className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white
                  border text-sm py-[13px] px-[25px] hover:bg-[#ce0000] hover:border-none"
                >
                  BUY TICKETS
                </button>
              </div>
            </Link>
          </div>

          <div className="text-sm mt-2 lg:text-[15px]">
            <p className="text-white uppercase">{movie.name}</p>
            <p className="text-gray-500 font-thin uppercase">{movie.namevn}</p>
          </div>
        </div>
        </>
    );
}

export default memo(MovieSoon);