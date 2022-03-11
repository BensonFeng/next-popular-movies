import type { NextPage } from "next";

import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Movie from "../components/Movie";

const Home: NextPage = () => {
  interface popularProps {
    popular: {
      id: number;
      backdrop_path: string;
      genre_ids: Array<number>;
      title: string;
    }[];
  }
  const [popular, setPopular] = useState<popularProps["popular"]>([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      ` https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB}&language=en-US&page=1`
    );
    const movies = await data.json();
    setPopular(movies.results);
    console.log(movies.results);
  };

  return (
    <div className={styles.container}>
      <div className="popular-movies">
        {popular
          ? popular.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Home;
