import PropsTypes from "prop-types";

const PlaylistCard = ({ playlist, width }) => {
  const playlistUrl = `https://www.youtube.com/playlist?list=${playlist.id.playlistId}`;

  return (
    <div className={`bg-white p-4 rounded shadow ${width ? "w-full" : "w-64"}`}>
      <a href={playlistUrl} target="_blank" rel="noopener noreferrer">
        <img
          className="w-full"
          src={playlist.snippet.thumbnails.medium.url}
          alt={playlist.snippet.title}
        />
        <h2 className="mt-2 text-sm  text-left">
          {playlist.snippet.title.length > 38
            ? `${playlist.snippet.title.substring(0, 38)}...`
            : playlist.snippet.title}
        </h2>
      </a>
    </div>
  );
};

PlaylistCard.propTypes = {
  playlist: PropsTypes.object.isRequired,
};

export default PlaylistCard;
