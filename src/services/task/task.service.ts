import type { IResponse } from "../_common/common.dto";
import { ApiService } from "../api.service";
import type {
  ICreateTaskDto,
  IMoveTaskDto,
  ITaskDto,
  ITaskHistoryDto,
  ITaskWithHistoryDto,
  IUpdateTaskDto,
} from "./task.dto";
import type {
  ICreateTaskSchema,
  IMoveTaskSchema,
  IUpdateTaskSchema,
} from "./task.schema";

export const TaskService = {
  // Get all tasks
  getAll: async () => {
    const { data } = await ApiService.get<IResponse<ITaskDto[]>>("/v1/task");
    return data.response;
  },

  // Get single task by id
  getById: async (id: number) => {
    const { data } = await ApiService.get<IResponse<ITaskWithHistoryDto>>(
      `/v1/task/${id}`
    );
    return data.response;
  },

  // Create new task
  create: async (schema: ICreateTaskSchema) => {
    const dto: ICreateTaskDto = schema;
    const { data } = await ApiService.post<IResponse<string>>("/v1/task", dto);
    return data.response;
  },

  // Update task
  update: async (id: number, schema: IUpdateTaskSchema) => {
    const dto: IUpdateTaskDto = {
      title: schema.title,
      description: schema.description,
      expireDate: new Date(schema.expireDate!),
    };
    const { data } = await ApiService.put<IResponse<string>>(
      `/v1/task/${id}`,
      dto
    );
    return data.response;
  },

  // Move task to different category
  move: async (id: number, schema: IMoveTaskSchema) => {
    const dto: IMoveTaskDto = schema;
    const { data } = await ApiService.put<IResponse<string>>(
      `/v1/task/${id}/move`,
      dto
    );
    return data.response;
  },

  // Get task history
  getHistory: async (id: number) => {
    const { data } = await ApiService.get<IResponse<ITaskHistoryDto[]>>(
      `/v1/task/${id}/history`
    );
    return data.response;
  },

  // Delete task
  delete: async (id: number) => {
    const { data } = await ApiService.delete<IResponse<string>>(
      `/v1/task/${id}`
    );
    return data.response;
  },
};
