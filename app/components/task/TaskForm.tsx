'use client';
import {
  taskContentAtom,
  taskTitleAtom,
  tasksAtom,
} from '@/app/recoil/atoms/task';
import { NextPage } from 'next';
import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

interface TaskFormProps {}

const TaskForm: NextPage<TaskFormProps> = () => {
  const taskTitle = useRecoilValue(taskTitleAtom);
  const taskContent = useRecoilValue(taskContentAtom);
  const setTaskList = useSetRecoilState(tasksAtom);
  const setTaskTitleValue = useSetRecoilState(taskTitleAtom);
  const setTaskContentValue = useSetRecoilState(taskContentAtom);

  const titleValueHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTaskTitleValue(e.target.value);
    },
    [setTaskTitleValue]
  );

  const contentValueHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTaskContentValue(e.target.value);
    },
    [setTaskContentValue]
  );

  const tasksSubmitHandler = useCallback(() => {
    setTaskList((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        title: taskTitle,
        content: taskContent,
      },
    ]);
    setTaskTitleValue('');
    setTaskContentValue('');
  }, [
    setTaskList,
    setTaskTitleValue,
    setTaskContentValue,
    taskTitle,
    taskContent,
  ]);
  return (
    <form className="mb-10">
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Title
        </label>
        <input
          id="title"
          onChange={(event) => titleValueHandler(event)}
          value={taskTitle}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Content
        </label>
        <input
          id="content"
          onChange={(event) => contentValueHandler(event)}
          value={taskContent}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        onClick={() => tasksSubmitHandler()}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
