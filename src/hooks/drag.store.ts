import type { ITaskDto } from "@/services/task/task.dto";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

type IDragStore = {
  task: ITaskDto | null;
  setTask: (task: ITaskDto | null) => void;
  removeTask: () => void;
};

export const useDragStore = createWithEqualityFn<IDragStore>((set) => {
  return {
    task: null,
    setTask: (task: ITaskDto | null) => set({ task }),
    removeTask: () => set({ task: null }),
  };
}, shallow);
