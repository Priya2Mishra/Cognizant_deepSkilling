import { Link } from 'react-router-dom';

export default function TrainersList({ trainers }) {
  return <section><h1>Trainers List</h1><ul className="trainer-list">
    {trainers.map((trainer) => <li key={trainer.TrainerId}>
      <Link to={`/trainers/${trainer.TrainerId}`}>{trainer.Name}</Link>
    </li>)}
  </ul></section>;
}
