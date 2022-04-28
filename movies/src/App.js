import "./App.css";
import { Card } from "./components/Card";
import { Films } from "./components/Films";
import React, { useState } from "react";
import { Search } from "./components/search/Search"

function App() {
  const [text, setText] = useState();
  const films_filtered = !text?Films:Films.filter(film=>film.Title.toLowerCase().includes(text.toLowerCase()));
  console.log("films filtered",films_filtered);
  return (
    <div className="container">
      <div className="heading">
        <h2>Movies</h2>
      </div>
      <Search handleEvent={setText} />
      <div className="movies">
        <Card films={films_filtered} />
      </div>
    </div>
  );
}

export default App;
