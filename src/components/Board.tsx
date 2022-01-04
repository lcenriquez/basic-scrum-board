import style from './Board.module.css';
import Task from './Task.tsx';

export default function Board({ name }) {
  return (
    <div className={style.boardContainer}>
      <h1 className={style.boardTitle}>{name}</h1>
      <Task />
    </div>
  )
};