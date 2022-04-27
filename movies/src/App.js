import "./App.css";
import { Card } from "./components/Card";
import { Films } from "./components/Films";
function App() {
  return (
    <div className="container">
      <div className="toptitle">
      <h2>Movies</h2>
      </div>
      <div className="movies">
        <Card films={Films} />
      </div>
    </div>
  );
}

export default App;
