import MovieCard from "./MovieCard";

const movieList = ({ title, movieList }) => {
  if (!movieList) return;
  return (
    <div>
      <div className="overflow-x-scroll no-scrollbar overflow-y-hidden">
        <p className="text-2xl font-semibold px-3 pt-4">{title}</p>
        <div className="flex w-max">
          {movieList.map((movie) => (
            <MovieCard
              key={movie?.ids?.imdb || movie?.movie?.ids?.imdb}
              imdb={movie?.ids?.imdb || movie?.movie?.ids?.imdb}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default movieList;
