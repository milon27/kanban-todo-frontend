import { DateUtil } from "@/lib/date-util";
import type { ITaskDto } from "@/services/task/task.dto";
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
import { Textarea } from "@/views/components/ui/textarea";
import { Eye } from "lucide-react";
import { useEffect } from "react";
import { useTaskController } from "./task.controller";

export default function TaskDetails({ task }: { task: ITaskDto }) {
  const { open, setOpen, updateRegister, updateSetValue, onUpdateTask } =
    useTaskController();
  // const { data: taskHistory } = useGetTaskHistoryById(task.id);

  useEffect(() => {
    updateSetValue("id", task.id);
    updateSetValue("title", task.title);
    updateSetValue("description", task.description);
    updateSetValue(
      "expireDate",
      DateUtil.getOnlyDate(new Date(task.expireDate))
    );
  });

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
            </div>
            <div className="space-y-2">
              <Label htmlFor="desc">Description</Label>
              <Textarea
                id="desc"
                className="col-span-3"
                {...updateRegister("description")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expireDate">Expire Date</Label>
              <Input
                type="date"
                id="expireDate"
                className="col-span-3"
                {...updateRegister("expireDate")}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={() => {
                onUpdateTask();
                setOpen(false);
              }}
            >
              Update Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
