import style from './Board.module.css';
import Task from './Task.tsx';

export default function Board({ name, tasks }) {
  return (
    <div className={style.boardContainer}>
      <h1 className={style.boardTitle}>{name}</h1>
      { tasks?.map((task, id) => <Task key={id} {...task} />) }
    </div>
  )
};