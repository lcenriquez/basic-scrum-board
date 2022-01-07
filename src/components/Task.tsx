import { useState } from 'react';
import style from './Task.module.css';

export default function Task({ boardId, title, description, action, assignedTo, create }) {
  const [ input, setInput ] = useState({boardId: boardId, title: '', description: ''});

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  }

  if(action === 'show') {
    return (
      <div className={style.taskContainer}>
        <h2 className={style.title}>{title}</h2>
        <p>{description}</p>
        <small>Assigned to: {assignedTo}</small>
      </div>
    )
  } else if(action === 'create') {
    return (
      <div className={style.taskContainer}>
        <input className={style.title} type="text" name="title" placeholder='Task title' onChange={(e) => handleChange(e)} />
        <input className={style.description} type="text" name="description" placeholder='Task description' onChange={(e) => handleChange(e)} />
        <button className='info' onClick={() => create(input)}>Create</button>
      </div>
    )
  }
}
