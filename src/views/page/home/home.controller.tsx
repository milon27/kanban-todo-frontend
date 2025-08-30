import { QueryKeys } from "@/config/query.config";
import { CategoryService } from "@/services/category/category.service";
import { TaskService } from "@/services/task/task.service";
import { useQuery } from "@tanstack/react-query";

export const useHomeController = () => {
  // get all categories
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: [QueryKeys.CATEGORIES],
    queryFn: () => {
      return CategoryService.getAll();
    },
  });

  // get all tasks
  const {
    data: tasks,
    isLoading: tasksLoading,
    error: tasksError,
  } = useQuery({
    queryKey: [QueryKeys.TASKS],
    queryFn: () => {
      return TaskService.getAll();
    },
  });

  return {
    categories,
    isLoading: isLoading || tasksLoading,
    error: error || tasksError,
    tasks,
  };
};
