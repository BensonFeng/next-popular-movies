import { useEffect } from "react";
import styles from "./Filter.module.css";

import { MovieInfo } from "../pages/Popular.interfaces";

interface Item {
  activeGenre: number;
  setActiveGenre: React.Dispatch<React.SetStateAction<number>>;
}

interface filterProps extends Item {
  setFiltered: React.Dispatch<React.SetStateAction<MovieInfo[]>>;
  popular: MovieInfo[];
}

const Filter = ({
  popular,
  setFiltered,
  activeGenre,
  setActiveGenre,
}: filterProps) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre, popular, setFiltered]);

  return (
    <div className={styles.filter_container}>
      <button
        className={activeGenre === 0 ? `${styles.active}` : ""}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 35 ? `${styles.active}` : ""}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? `${styles.active}` : ""}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
    </div>
  );
};

export default Filter;
