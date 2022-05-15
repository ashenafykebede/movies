import "./App.css";
import { Card } from "./components/Card";
import React, { useState } from "react";
import { Search } from "./components/search/Search";
import { FilterData } from './components/util/FilterData';

function App() {
  const [text, setText] = useState();
  const films_filtered = FilterData({text});
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
