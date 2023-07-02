import { atom } from 'recoil';
import { Tasks } from '../type';

export const tasksAtom = atom<Tasks>({
  key: 'tasks',
  default: [
    {
      title: 'Task 1',
      content: 'Content 1',
    },
  ],
});

export const taskTitleAtom = atom<string>({
  key: 'taskTitle',
  default: '',
});

export const taskContentAtom = atom<string>({
  key: 'taskContent',
  default: '',
});
