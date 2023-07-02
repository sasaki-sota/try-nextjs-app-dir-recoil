import { selector } from 'recoil';
import { tasksAtom } from '../atoms/task';

export const tasksSelector = selector({
  key: 'tasksSelector',
  get: ({ get }) => {
    return get(tasksAtom);
  },
});
