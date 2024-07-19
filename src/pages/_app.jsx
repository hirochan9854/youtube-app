import "@/styles/globals.css";
import { GenreProvider } from "@/context/GenreContext";
import PropTypes from "prop-types";

function App({ Component, pageProps }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100..900&display=swap"
        rel="stylesheet"
      />

      <GenreProvider>
        <Component {...pageProps} />
      </GenreProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
