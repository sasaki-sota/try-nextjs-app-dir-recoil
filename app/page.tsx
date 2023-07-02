import TaskForm from './components/task/TaskForm';
import TaskList from './components/task/TaskList';

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl mt-10">Home</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
