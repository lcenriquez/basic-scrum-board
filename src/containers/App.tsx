import Nav from '../components/Nav.tsx';
import Board from '../components/Board.tsx';
import './App.css';

function App() {
  const boardNames = ['Backlog', 'To do', 'In progress', 'Testing', 'Done'];

  document.body.classList.add('darkMode');

  return (
    <div className="App">
      <Nav />
      <div className="boardsContainer">
        { boardNames.map(board => <Board name={board} key={board} />) }
      </div>
    </div>
  );
}

export default App;
