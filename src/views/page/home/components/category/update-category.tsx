import type { ICategoryDto } from "@/services/category/category.dto";
import Info from "@/views/components/common/info";
import { Button } from "@/views/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/views/components/ui/dialog";
import { Input } from "@/views/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Pencil } from "lucide-react";
import { useEffect } from "react";
import { useCategoryController } from "./category.controller";

export default function UpdateCategory({
  category,
}: {
  category: ICategoryDto;
}) {
  const {
    open,
    setOpen,
    updateErrors,
    updateRegister,
    onUpdateCategory,
    updateSetValue,
  } = useCategoryController();

  useEffect(() => {
    updateSetValue("id", category.id);
    updateSetValue("title", category.title);
  }, [category.id]);

  return (
    <div className="flex justify-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-2">
            <Pencil className="w-4 h-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update category</DialogTitle>
            <DialogDescription>
              e.g. In Review, In Pr, Deployed etc
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-4">
            <div className="flex flex-row justify-between items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                className="col-span-3"
                {...updateRegister("title", {
                  value: category.title,
                })}
              />
            </div>
            {updateErrors.title && (
              <Info message={updateErrors.title.message} />
            )}
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={() => {
                onUpdateCategory();
                setOpen(false);
              }}
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
