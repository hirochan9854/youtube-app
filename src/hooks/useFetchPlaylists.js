import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPlaylists = (searchQuery) => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              q: searchQuery,
              type: "playlist",
              maxResults: 10,
              key: "AIzaSyAYYnASIlMMkFKmy1ol1fRQfvmurQ-xBoU",
            },
          }
        );
        setPlaylists(response.data.items);
      } catch (error) {
        console.error("再生リストの取得中にエラーが発生しました:", error);
      }
    };

    fetchPlaylists();
  }, [searchQuery]);

  return playlists;
};

export default useFetchPlaylists;
