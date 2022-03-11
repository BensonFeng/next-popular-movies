import { useEffect } from "react";
import styles from "./Filter.module.css";

import { MovieInfo } from "../pages/Popular.interfaces";

interface filterProps {
  setFiltered: React.Dispatch<React.SetStateAction<MovieInfo[]>>;
  popular: MovieInfo[];
}

const Filter = ({ popular, setFiltered }: filterProps) => {
  return (
    <div className={styles.filter_container}>
      <button className={styles.active}>All</button>
      <button>Comedy</button>
      <button>Action</button>
    </div>
  );
};

export default Filter;
