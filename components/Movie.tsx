interface popularProps {
  movie: {
    id: number;
    backdrop_path: string;
    genre_ids: Array<number>;
    title: string;
  };
}
const Movie = ({ movie }: popularProps) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt="movie cover"
      />
    </div>
  );
};

export default Movie;
