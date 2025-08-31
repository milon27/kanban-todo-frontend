import { queryClient, QueryKeys } from "@/config/query.config";
import {
  CreateCategorySchema,
  type ICreateCategorySchema,
} from "@/services/category/category.schema";
import { CategoryService } from "@/services/category/category.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const useCategoryController = () => {
  const [open, setOpen] = useState(false);
  // create new category
  const {
    register: createRegister,
    handleSubmit: createHandleSubmit,
    formState: { errors: createErrors },
  } = useForm<ICreateCategorySchema>({
    resolver: zodResolver(CreateCategorySchema),
    defaultValues: {
      title: "",
    },
  });

  const onCreateCategory = async (data: ICreateCategorySchema) => {
    try {
      await CategoryService.create(data);
      await queryClient.invalidateQueries({
        queryKey: [QueryKeys.CATEGORIES],
        type: "all",
      });
      setOpen(false);
      toast("Category created successfully");
    } catch (error) {
      console.log("onCreateCategory: ", error);
      toast((error as Error).message);
    }
  };
  // update category
  return {
    open,
    setOpen,
    createRegister,
    onCreateCategory: createHandleSubmit(onCreateCategory),
    createErrors,
  };
};
