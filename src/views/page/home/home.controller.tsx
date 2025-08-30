import { CategoryService } from "@/services/category/category.service";
import { useQuery } from "@tanstack/react-query";

export const useHomeController = () => {
  //   get all categories
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return CategoryService.getAll();
    },
  });

  // get all tasks
  // const { data: tasks } = useQuery({
  //   queryKey: ["tasks"],
  //   queryFn: () => {
  //     return TaskService.getAll();
  //   },
  // });

  return {
    categories,
    isLoading,
    error,
  };
};
