import { createContext, useState, useContext } from "react";

export const GenreContext = createContext();

export const GenreProvider = ({ children }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const toggleGenre = (genre) => {
    setSelectedGenres((prevSelectedGenres) => {
      if (prevSelectedGenres.includes(genre)) {
        return prevSelectedGenres.filter((g) => g !== genre);
      } else {
        return [...prevSelectedGenres, genre];
      }
    });
  };

  return (
    <GenreContext.Provider value={{ selectedGenres, toggleGenre }}>
      {children}
    </GenreContext.Provider>
  );
};

export const useGenre = () => useContext(GenreContext); // useGenre をエクスポート
