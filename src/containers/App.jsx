import Nav from '../components/Nav';
import Board from '../components/Board';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, query, onSnapshot } from 'firebase/firestore'
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

  async function updateTask(id, boardId = null) {
    const taskRef = doc(db, "tasks", id);
    if(boardId !== null) await updateDoc(taskRef, {boardId});
  }

  async function deleteTask(id) {
    if (window.confirm("Do you really want to delete this task?")) {
      await deleteDoc(doc(db, "tasks", id));
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="App">
      <Nav />
      <div className="boardsContainer">
        {boardNames.map((board, index) => <Board key={index} id={index} name={board} tasks={tasks} createTask={createTask} updateTask={updateTask} deleteTask={deleteTask} />)}
      </div>
    </div>
  );
}

export default App;
