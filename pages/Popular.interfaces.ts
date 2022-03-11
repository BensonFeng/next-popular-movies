export interface MovieInfo {
  id: number;
  backdrop_path: string;
  genre_ids: Array<number>;
  title: string;
}
export interface PopularProps {
  popular: MovieInfo[];
}
