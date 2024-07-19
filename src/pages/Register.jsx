import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Start } from "@/components/Start";
import { useGenre } from "@/context/GenreContext";
import Header from "@/components/Header";
export default function Register() {
  const { selectedGenres, toggleGenre } = useGenre();
  const [isOpen, setIsOpen] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onClose = () => {
    setIsOpen(false);
  };

  const handleNavigate = () => {
    if (selectedGenres.length > 0) {
      navigate("/");
    } else {
      setError("最低でも一つのジャンルを選択してください。");
    }
  };

  const genres = [
    "アニメ",
    "バラエティ",
    "恋愛",
    "コメディ",
    "音楽",
    "アイドル",
    "スポーツ",
    "ドキュメンタリー",
    "ゲーム",
  ];

  return (
    <div className="h-screen">
      <Start isOpen={isOpen} onClose={onClose} />
      <Header />
      <div className="p-9 mt-30">
        <h2 className="text-center text-lg mb-10">
          興味のあるジャンル（複数可）
        </h2>
        <form>
          {genres.map((genre) => (
            <label
              key={genre}
              className="mr-4 mb-4 inline-block p-2 bg-slate-200 rounded"
            >
              <input
                type="checkbox"
                value={genre}
                checked={selectedGenres.includes(genre)}
                onChange={() => {
                  toggleGenre(genre);
                  setError("");
                }}
              />
              <span className="text-nowrap">{genre}</span>
            </label>
          ))}
        </form>
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
        <button
          className="block mx-auto bg-slate-200 p-4 rounded mt-9"
          onClick={handleNavigate}
        >
          次へ
        </button>
      </div>
    </div>
  );
}
