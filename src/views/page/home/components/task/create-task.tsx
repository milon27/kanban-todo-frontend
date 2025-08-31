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
import { Label } from "@/views/components/ui/label";
import { useEffect } from "react";
import { useTaskController } from "./task.controller";

export default function CreateTask({
  category,
  length,
}: {
  category: ICategoryDto;
  length: number;
}) {
  const {
    open,
    setOpen,
    createRegister,
    onCreateTask,
    createErrors,
    createSetValue,
  } = useTaskController();

  useEffect(() => {
    createSetValue("categoryId", category.id);
    createSetValue("position", length + 1);
  }, [category.id]);

  return (
    <div className="w-full flex justify-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full">
            Crate New Task
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create new task in "{category.title}"</DialogTitle>
            <DialogDescription>e.g. Setup a next js project.</DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <div className="flex flex-row justify-between items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                className="col-span-3"
                {...createRegister("title")}
              />
            </div>
            {createErrors.title && (
              <Info message={createErrors.title.message} />
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="expireDate">Expire Date</Label>
            <Input
              type="date"
              id="expireDate"
              className="col-span-3"
              {...createRegister("expireDate")}
            />
            {createErrors?.expireDate && (
              <Info message={createErrors.expireDate.message} />
            )}
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={() => {
                onCreateTask();
              }}
            >
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
