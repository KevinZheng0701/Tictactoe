import './App.css';
import Header from './components/Header/Header';
import Game from './components/Game/Game';


function App() {
  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>
      <div className="game-container">
        <Game />
      </div>
    </div>
  );
}

export default App;
