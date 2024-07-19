import { useContext } from "react";
import { GenreContext } from "../context/GenreContext";

export const useGenre = () => {
  const { selectedGenres, toggleGenre } = useContext(GenreContext);
  return { selectedGenres, toggleGenre };
};
