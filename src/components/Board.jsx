import { useState } from 'react';
import style from './Board.module.css';
import Task from './Task';

export default function Board({ id, name, tasks, createTask, deleteTask }) {
  const [ create, setCreate ] = useState(false);

  function newTask() {setCreate(true)}
  function cancelNewTask() {setCreate(false)}
  function handleSumbit(input) {
    createTask(input);
    setCreate(false);
  }

  return (
    <div className={style.boardContainer}>
      <h1 className={style.boardTitle}>{name}</h1>
      { tasks?.map((task, index) => task.boardId===id ? <Task key={index} action="show" deleteTask={deleteTask} {...task} /> : null) }
      { create ? <Task action="create" create={handleSumbit} boardId={id} /> : null }
      { create ? <p className={style.addTask} onClick={cancelNewTask}>Close</p> : <p className={style.addTask} onClick={newTask}>Add new task</p> }
    </div>
  )
};