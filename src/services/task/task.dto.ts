import type { DateTimeString } from "../_common/common.type";
import type {
  ICreateTaskSchema,
  IMoveTaskSchema,
  IUpdateTaskSchema,
} from "./task.schema";

// request
export type ICreateTaskDto = ICreateTaskSchema;
export type IUpdateTaskDto = IUpdateTaskSchema;
export type IMoveTaskDto = IMoveTaskSchema;

// response
export type ITaskDto = {
  id: number;
  userId: string;
  categoryId: number;
  title: string;
  description: string;
  expireDate: DateTimeString;
  position: number;
  createdAt: DateTimeString;
  category: {
    id: number;
    title: string;
    createdAt: DateTimeString;
  };
};

export type ITaskWithHistoryDto = ITaskDto & {
  history: ITaskHistoryDto[];
};

export type ITaskHistoryDto = {
  id: number;
  taskId: number;
  fromCategoryId: number | null;
  toCategoryId: number;
  action: string;
  createdAt: DateTimeString;
};
