import { Link, useParams } from 'react-router-dom';

export default function TrainerDetail({ trainers }) {
  const { id } = useParams();
  const trainer = trainers.find((item) => item.TrainerId === Number(id));
  if (!trainer) return <section><h1>Trainer not found</h1><Link to="/trainers">Back to trainers</Link></section>;
  return <section><h1>Trainer Details</h1><dl className="details">
    <dt>T-ID</dt><dd>{trainer.TrainerId}</dd><dt>Name</dt><dd>{trainer.Name}</dd>
    <dt>Email</dt><dd>{trainer.Email}</dd><dt>Phone</dt><dd>{trainer.Phone}</dd>
    <dt>Stream</dt><dd>{trainer.Technology}</dd><dt>Skills</dt><dd>{trainer.Skills.join(', ')}</dd>
  </dl><Link to="/trainers">Back to trainers</Link></section>;
}
