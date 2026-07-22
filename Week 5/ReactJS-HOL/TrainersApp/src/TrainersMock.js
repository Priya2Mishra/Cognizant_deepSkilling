import Trainer from './trainer';

const trainers = [
  new Trainer(1, 'Anita Sharma', 'anita.sharma@example.com', '9876543210', 'Java', ['Spring Boot', 'Microservices']),
  new Trainer(2, 'Rahul Verma', 'rahul.verma@example.com', '9876543211', 'React', ['React', 'JavaScript', 'Redux']),
  new Trainer(3, 'Meera Iyer', 'meera.iyer@example.com', '9876543212', 'Python', ['Python', 'Django', 'REST API']),
  new Trainer(4, 'Arjun Nair', 'arjun.nair@example.com', '9876543213', 'Cloud', ['AWS', 'Docker', 'Kubernetes']),
  new Trainer(5, 'Priya Das', 'priya.das@example.com', '9876543214', 'Testing', ['Selenium', 'JUnit', 'Postman'])
];

export default trainers;
