import Nav from '../components/Nav.tsx';
import Board from '../components/Board.tsx';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore'
import './App.css';

async function getTasks() {
  const q = collection(db, "tasks");
  const citySnapshot = await getDocs(q);
  const tasks = citySnapshot.docs.map(doc => doc.data());
  return tasks;
}

function App() {
  const boardNames = ['Backlog', 'To do', 'In progress', 'Testing', 'Done'];
  const [ tasks, setTasks ] = useState([]);
  document.body.classList.add('darkMode');

  useEffect(() => {
    getTasks().then((tasks) => {
      setTasks(tasks);
    });
  },[]);

  return (
    <div className="App">
      <Nav />
      <div className="boardsContainer">
        { boardNames.map((board, index) => <Board key={index} name={board} tasks={tasks} />) }
      </div>
    </div>
  );
}

export default App;
