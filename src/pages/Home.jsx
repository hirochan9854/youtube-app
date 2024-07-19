/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PlaylistCard from "@/components/PlaylistCard";
import Header from "@/components/Header";
import useFetchPlaylists from "@/hooks/useFetchPlaylists";
import { useGenre } from "@/context/GenreContext";
import Footer from "@/components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const { selectedGenres } = useGenre();

  useEffect(() => {
    if (selectedGenres.length === 0) {
      navigate("/register");
    }
  }, [selectedGenres, navigate]);

  // ジャンルごとのプレイリストを取得
  const playlists = {};
  selectedGenres.forEach((genre) => {
    playlists[genre] = useFetchPlaylists(`${genre}+番組`);
  });

  // 人気のドラマとアニメを取得
  const popularDrama = useFetchPlaylists("テレ東公式 ドラマチャンネル");
  const popularAnime = useFetchPlaylists("フル☆アニメTV");

  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen p-6">
        {Object.keys(playlists).map((genre) => (
          <div key={genre} className="mb-3">
            <h2 className="text-2xl font-normal mb-4 text-left">{genre}</h2>
            <div className="flex items-stretch overflow-x-auto">
              {playlists[genre].map((playlist) => (
                <PlaylistCard
                  key={playlist.id.playlistId}
                  playlist={playlist}
                />
              ))}
            </div>
          </div>
        ))}
        <div className="mb-3">
          <h2 className="text-3xl font-normal mb-6 text-left">人気ドラマ</h2>
          <div className="flex items-stretch overflow-x-auto">
            {popularDrama.map((playlist) => (
              <PlaylistCard key={playlist.id.playlistId} playlist={playlist} />
            ))}
          </div>
        </div>
        <div className="mb-3">
          <h2 className="text-3xl font-normal mb-6 text-left">人気アニメ</h2>
          <div className="flex items-stretch overflow-x-auto">
            {popularAnime.map((playlist) => (
              <PlaylistCard key={playlist.id.playlistId} playlist={playlist} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
