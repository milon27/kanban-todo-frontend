import type { DateTimeString } from "../_common/common.type";
import type {
  ICreateTaskSchema,
  IMoveTaskSchema,
  IUpdateTaskSchema,
} from "./task.schema";

// request
export type ICreateTaskDto = Omit<ICreateTaskSchema, "expireDate"> & {
  expireDate: Date;
};
export type IUpdateTaskDto = Omit<IUpdateTaskSchema, "id" | "expireDate"> & {
  expireDate: Date;
};
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
