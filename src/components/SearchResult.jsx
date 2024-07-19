import React from "react";
import useFetchPlaylists from "../hooks/useFetchPlaylists";
import PlaylistCard from "./PlaylistCard";

const SearchResult = ({ query }) => {
  // `useFetchPlaylists` が非同期のため、状態管理が必要
  const playlists = useFetchPlaylists(query);

  if (query === "") {
    return null; // クエリが空の場合、何も表示しない
  }

  return (
    <div className="overflow-scroll h-[calc(100vh-270px)]">
      {playlists.length > 0 ? (
        playlists.map((playlist) => (
          <PlaylistCard
            width={true}
            key={playlist.id.playlistId}
            playlist={playlist}
          />
        ))
      ) : (
        <p>検索結果がありません。</p>
      )}
    </div>
  );
};

export default SearchResult;
