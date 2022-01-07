export default function Task({ name, description, assignedTo }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <small>Assigned to: {assignedTo}</small>
    </div>
  )
}
