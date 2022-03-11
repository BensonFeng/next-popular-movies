import type { NextPage } from "next";

import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Movie from "../components/Movie";
import Filter from "../components/Filter";

import { PopularProps } from "./Popular.interfaces";

const Home: NextPage = () => {
  const [popular, setPopular] = useState<PopularProps["popular"]>([]);
  const [filtered, setFiltered] = useState<PopularProps["popular"]>([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      ` https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB}&language=en-US&page=1`
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className="app">
      <Filter popular={popular} setFiltered={setFiltered} />
      <div className={styles.popular_movies}>
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
