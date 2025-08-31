import { KeyConstant } from "@/constant/key.constant";
import { useFormPersist } from "@/hooks/use-form-persist.hook";
import { DateUtil } from "@/lib/date-util";
import type { ITaskDto } from "@/services/task/task.dto";
import Info from "@/views/components/common/info";
import { Button } from "@/views/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/views/components/ui/dialog";
import { Input } from "@/views/components/ui/input";
import { Label } from "@/views/components/ui/label";
import { Textarea } from "@/views/components/ui/textarea";
import { Eye } from "lucide-react";
import { useEffect } from "react";
import { useTaskController } from "./task.controller";

export default function TaskDetails({ task }: { task: ITaskDto }) {
  const {
    open,
    setOpen,
    updateRegister,
    updateSetValue,
    updateWatch,
    onUpdateTask,
    updateErrors,
    useGetTaskHistoryById,
  } = useTaskController();
  const { data: taskHistory } = useGetTaskHistoryById(task.id);

  useFormPersist(
    KeyConstant.OFFLINE_KEY + task.id,
    updateWatch,
    updateSetValue
  );

  useEffect(() => {
    if (sessionStorage.getItem(KeyConstant.OFFLINE_KEY + task.id)) {
      return;
    }
    updateSetValue("id", task.id);
    updateSetValue("title", task.title);
    updateSetValue("description", task.description);
    updateSetValue(
      "expireDate",
      DateUtil.getOnlyDate(new Date(task.expireDate))
    );
  }, [task.id]);

  return (
    <div className="flex justify-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-2">
            <Eye className="w-4 h-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>{task.title}</DialogTitle>
            <DialogDescription>
              <span>Category : {task.category.title}</span>
              <br />
              <span>
                Expire Date: {new Date(task.expireDate).toLocaleDateString()}
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
                className="col-span-3"
                {...updateRegister("title")}
              />
              {updateErrors?.title && (
                <Info message={updateErrors.title.message} />
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="desc">Description</Label>
              <Textarea
                id="desc"
                className="col-span-3"
                {...updateRegister("description")}
              />
              {updateErrors?.description && (
                <Info message={updateErrors.description.message} />
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="expireDate">Expire Date</Label>
              <Input
                type="date"
                id="expireDate"
                className="col-span-3"
                {...updateRegister("expireDate")}
              />
              {updateErrors?.expireDate && (
                <Info message={updateErrors.expireDate.message} />
              )}
            </div>
          </div>

          <div className="w-full space-y-2">
            <div className="flex flex-row justify-end">
              <Button
                type="submit"
                onClick={() => {
                  onUpdateTask();
                }}
              >
                Update Changes
              </Button>
            </div>
            {/* history */}
            <div className="w-full space-y-2 mt-4">
              {taskHistory?.map((message, index) => {
                return (
                  <div key={index} className="w-full font-thin text-gray-500">
                    <p>♐︎ {message}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
