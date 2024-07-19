import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 px-16 fixed bottom-0 w-screen">
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/search">検索</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
