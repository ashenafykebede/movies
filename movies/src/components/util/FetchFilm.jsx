
import { Films } from "../data/Data";

export const FetchFilm = ({id}) => {
   const filtered_data =!id?Films:Films.filter(film=>film.imdbID.toLowerCase().includes(id.toLowerCase()));
   return filtered_data;
}

export default FetchFilm