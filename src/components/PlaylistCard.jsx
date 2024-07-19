import PropsTypes from "prop-types";

const PlaylistCard = ({ playlist }) => {
  const playlistUrl = `https://www.youtube.com/playlist?list=${playlist.id.playlistId}`;

  return (
    <div className="bg-white p-4 rounded shadow min-h-44 min-w-52">
      <a href={playlistUrl} target="_blank" rel="noopener noreferrer">
        <img
          className="w-full"
          src={playlist.snippet.thumbnails.medium.url}
          alt={playlist.snippet.title}
        />
        <h2 className="mt-2 text-xl text-ellipsis">
          {playlist.snippet.title.length > 20
            ? `${playlist.snippet.title.substring(0, 20)}...`
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
