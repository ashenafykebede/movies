
import { Films } from "../data/Data";

export const FilterData = ({text}) => {
   const filtered_data =!text?Films:Films.filter(film=>film.Title.toLowerCase().includes(text.toLowerCase()));
   return filtered_data;
}

export default FilterData