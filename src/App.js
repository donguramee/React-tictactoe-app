import "./App.css";
import Board from "./component/Board";

function App() {
  /* html */
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info"></div>
    </div>
  );
}

export default App;
