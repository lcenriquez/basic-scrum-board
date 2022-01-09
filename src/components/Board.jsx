import { useState } from 'react';
import style from './Board.module.css';
import Task from './Task';

export default function Board({ id, name, tasks, createTask, updateTask, deleteTask }) {
  const [ create, setCreate ] = useState(false);
  const [ taskPlaceholder, setTaskPlaceholder ] = useState(false);

  function newTask() {setCreate(true)}
  function cancelNewTask() {setCreate(false)}
  function handleSumbit(input) {
    createTask(input);
    setCreate(false);
  }

  function handleDragOver(event) {
    event.preventDefault();
    setTaskPlaceholder(true);
  }

  function handleDrop(event, boardId) {
    let id = event.dataTransfer.getData('id');
    updateTask(id, boardId);
    setTaskPlaceholder(false);
  }

  function createTaskPlaceholder(id) {
    let task = tasks.filter(task => task.id === id);
    // console.log(task[0]);
  }

  return (
    <div className={style.boardContainer} onDragOver={(e) => handleDragOver(e)} onDragLeave={() => setTaskPlaceholder(false)} onDrop={(e) => handleDrop(e, id)} >
      <h1 className={style.boardTitle}>{name}</h1>
      { tasks?.map((task, index) => task.boardId===id ? <Task key={index} action="show" deleteTask={deleteTask} createTaskPlaceholder={createTaskPlaceholder} {...task} /> : null) }
      { create ? <Task action="create" create={handleSumbit} boardId={id} /> : null }
      { taskPlaceholder ? <Task action="placeholder" /> : null }
      { create ? <p className={style.addTask} onClick={cancelNewTask}>Close</p> : taskPlaceholder ? null : <p className={style.addTask} onClick={newTask}>Add new task</p> }
    </div>
  )
};