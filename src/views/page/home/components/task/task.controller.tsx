import { queryClient, QueryKeys } from "@/config/query.config";
import {
  CreateTaskSchema,
  UpdateTaskSchema,
  type ICreateTaskSchema,
  type IUpdateTaskSchema,
} from "@/services/task/task.schema";
import { TaskService } from "@/services/task/task.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const useTaskController = () => {
  const [open, setOpen] = useState(false);

  // create new task
  const {
    register: createRegister,
    handleSubmit: createHandleSubmit,
    formState: { errors: createErrors },
  } = useForm<ICreateTaskSchema>({
    resolver: zodResolver(CreateTaskSchema),
    defaultValues: {
      title: "",
      description: "",
      categoryId: 0,
      expireDate: undefined,
      position: 0,
    },
  });

  const onCreateTask = async (data: ICreateTaskSchema) => {
    try {
      await TaskService.create(data);
      await queryClient.invalidateQueries({
        queryKey: [QueryKeys.TASKS],
        type: "all",
      });
      setOpen(false);
      toast("Task created successfully");
    } catch (error) {
      console.log("onCreateTask: ", error);
      toast((error as Error).message);
    }
  };

  // update task
  const {
    register: updateRegister,
    handleSubmit: updateHandleSubmit,
    formState: { errors: updateErrors },
    setValue: updateSetValue,
    watch: updateWatch,
  } = useForm<IUpdateTaskSchema>({
    resolver: zodResolver(UpdateTaskSchema),
    mode: "onChange",
  });

  const onUpdateTask = async (data: IUpdateTaskSchema) => {
    try {
      await TaskService.update(data.id, data);
      await queryClient.invalidateQueries({
        queryKey: [QueryKeys.TASKS],
        type: "all",
      });
      setOpen(false);
      toast("Task updated successfully");
    } catch (error) {
      console.log("onUpdateTask: ", error);
      toast((error as Error).message);
    }
  };

  // get task task history
  const useGetTaskHistoryById = (taskId: number) => {
    return useQuery({
      queryKey: [QueryKeys.TASKS, taskId],
      queryFn: () => TaskService.getById(taskId),
      enabled: !!taskId,
    });
  };

  return {
    open,
    setOpen,
    // create
    createRegister,
    onCreateTask: createHandleSubmit(onCreateTask),
    createErrors,
    // update
    updateWatch,
    updateSetValue,
    updateRegister,
    onUpdateTask: updateHandleSubmit(onUpdateTask),
    updateErrors,
    // query
    useGetTaskHistoryById,
  };
};
