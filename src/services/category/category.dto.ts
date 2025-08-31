import type { DateTimeString } from "../_common/common.type";
import type {
  ICreateCategorySchema,
  IUpdateCategorySchema,
} from "./category.schema";

// request
export type ICreateCategoryDto = ICreateCategorySchema;
export type IUpdateCategoryDto = Omit<IUpdateCategorySchema, "id">;

// response
export type ICategoryDto = {
  id: number;
  title: string;
  createdAt: DateTimeString; // "2025-08-29T18:17:38.000Z";
};
