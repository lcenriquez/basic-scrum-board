import Nav from '../components/Nav.tsx';
import Board from '../components/Board.tsx';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore'
import './App.css';

function App() {
  const boardNames = ['Backlog', 'To do', 'In progress', 'Testing', 'Done'];
  const [ tasks, setTasks ] = useState([]);
  let dismiss = false;
  
  document.body.classList.add('darkMode');

  async function getTasks() {
    const q = collection(db, "tasks");
    const citySnapshot = await getDocs(q);
    const tasks = citySnapshot.docs.map(doc => doc.data());
    setTasks(tasks);
  }
  
  async function createTask({boardId, title, description}) {
    await addDoc(collection(db, "tasks"), {
      boardId,
      title,
      description,
      assignedTo: 'luis'
    });
    dismiss = true;
    getTasks();
  }

  useEffect(() => {
    getTasks();
  },[]);

  return (
    <div className="App">
      <Nav />
      <div className="boardsContainer">
        { boardNames.map((board, index) => <Board key={index} id={index} name={board} tasks={tasks} createTask={createTask} dismiss={dismiss} />) }
      </div>
    </div>
  );
}

export default App;
