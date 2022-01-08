import style from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={style.navContainer}>
      <span className={style.title}>Simple Scrum Board App</span>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </nav>
  )
};