import type { IResponse } from "../_common/common.dto";
import { ApiService } from "../api.service";
import type {
  ICategoryDto,
  ICreateCategoryDto,
  IUpdateCategoryDto,
} from "./category.dto";
import type {
  ICreateCategorySchema,
  IUpdateCategorySchema,
} from "./category.schema";

export const CategoryService = {
  // api call with axios
  create: async (schema: ICreateCategorySchema) => {
    const dto: ICreateCategoryDto = schema;
    const { data } = await ApiService.post<IResponse<string>>(
      "/v1/category",
      dto
    );
    return data.response;
  },
  update: async (id: number, schema: IUpdateCategorySchema) => {
    const dto: IUpdateCategoryDto = {
      title: schema.title,
    };
    const { data } = await ApiService.put<IResponse<string>>(
      `/v1/category/${id}`,
      dto
    );
    return data.response;
  },

  getAll: async () => {
    const { data } = await ApiService.get<IResponse<ICategoryDto[]>>(
      "/v1/category"
    );
    const createNewCategory: ICategoryDto = {
      id: -10,
      title: "Crate New Category",
      createdAt: new Date().toISOString(),
    };
    return [...data.response, createNewCategory];
  },
};
