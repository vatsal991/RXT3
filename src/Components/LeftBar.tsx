import { MoviesDetails } from "../Interface";

export const LeftBar = ({ setactiveMovie }: any) => {
  return (
    <div className="w-full col-span-2 bg-[#576CBC] text-xl py-3 px-3 text-white font-semibold rounded-md">
      Movies :
      {MoviesDetails.map((movie) => {
        return (
          <div
            key={movie.MovieID}
            className="bg-[#19376D] bg-opacity-70 hover:bg-opacity-100 py-3 px-2 mt-2 rounded-md text-center cursor-pointer"
            onClick={() => setactiveMovie(movie.MovieID)}
          >
            {movie.MovieName}
          </div>
        );
      })}
    </div>
  );
};
