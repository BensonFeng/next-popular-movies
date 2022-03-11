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
    </div>
  );
};

export default Movie;
