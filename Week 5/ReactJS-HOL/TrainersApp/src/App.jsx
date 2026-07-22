import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TrainersList from './TrainersList';
import TrainerDetail from './TrainerDetails';
import trainers from './TrainersMock';

export default function App() {
  return <BrowserRouter><main className="app"><nav><Link to="/home">Home</Link><Link to="/trainers">Trainers</Link></nav>
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/trainers" element={<TrainersList trainers={trainers} />} />
      <Route path="/trainers/:id" element={<TrainerDetail trainers={trainers} />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  </main></BrowserRouter>;
}
