import Nav from '../components/Nav';
import Board from '../components/Board';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, deleteDoc, doc, query, onSnapshot } from 'firebase/firestore'
import './App.css';

function App() {
  const boardNames = ['Backlog', 'To do', 'In progress', 'Testing', 'Done'];
  const [tasks, setTasks] = useState([]);

  document.body.classList.add('darkMode');

  async function getTasks() {
    const q = query(collection(db, "tasks"));
    onSnapshot(q, (querySnapshot) => {
      let tasks = [];
      querySnapshot.forEach((doc) => {
        tasks.push({id: doc.id, ...doc.data()});
      });
      setTasks(tasks);
    });
  }

  async function createTask({ boardId, title, description }) {
    await addDoc(collection(db, "tasks"), {
      boardId,
      title,
      description,
      assignedTo: 'luis'
    });
  }

  async function deleteTask(id) {
    alert(id);
    await deleteDoc(doc(db, "tasks", id));
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="App">
      <Nav />
      <div className="boardsContainer">
        {boardNames.map((board, index) => <Board key={index} id={index} name={board} tasks={tasks} createTask={createTask} deleteTask={deleteTask} />)}
      </div>
    </div>
  );
}

export default App;
