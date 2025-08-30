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

  return {
    categories,
    isLoading,
    error,
  };
};
