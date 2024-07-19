import PropTypes from "prop-types"; // 追加

export const Start = ({ onClose, isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="flex justify-center items-center h-screen w-full bg-white fixed top-0 left-0">
      <div className="fixed border border-solid top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-5/6 py-5 rounded-2xl ">
        <h2 className="text-2xl">
          あなたの好みを
          <br />
          教えて下さい
        </h2>
        <button onClick={onClose} className="mt-4 bg-slate-100 p-2 rounded-xl">
          <p>はじめる</p>
        </button>
      </div>
    </div>
  );
};

Start.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
