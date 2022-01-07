import style from './Task.module.css';

export default function Task({ name, description, assignedTo }) {
  return (
    <div className={style.taskContainer}>
      <h2 className={style.title}>{name}</h2>
      <p>{description}</p>
      <small>Assigned to: {assignedTo}</small>
    </div>
  )
}
