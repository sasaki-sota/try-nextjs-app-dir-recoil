'use client';
import { tasksSelector } from '@/app/recoil/selectors/task';
import { NextPage } from 'next';
import { useRecoilValue } from 'recoil';

interface TaskListProps {}

const TaskList: NextPage<TaskListProps> = () => {
  const tasks = useRecoilValue(tasksSelector);
  return (
    <div>
      {tasks.map((task, index) => (
        <ul
          className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400"
          key={index}
        >
          <li>
            {task.title}
            <ul className="pl-5 mt-2 space-y-1 list-decimal list-inside">
              <li>{task.content}</li>
            </ul>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TaskList;
