import { useDragStore } from "@/hooks/drag.store";
import { DateUtil } from "@/lib/date-util";
import { cn } from "@/lib/utils";
import type { ITaskDto } from "@/services/task/task.dto";
import Info from "@/views/components/common/info";
import TaskDetails from "./task-details";

export default function Task({ task }: { task: ITaskDto }) {
  const { setTask, removeTask, task: dragTask } = useDragStore();

  const daysLeft = DateUtil.getDayDifference(new Date(task.expireDate));

  return (
    <>
      <div
        key={task.id}
        className={cn(
          "p-4 bg-gray-50 rounded-lg shadow border border-gray-100 cursor-grab transition-opacity duration-200",
          {
            "opacity-20": task.id === dragTask?.id,
          }
        )}
        draggable
        onDragStart={() => {
          setTask(task);
        }}
        onDragEnd={() => {
          removeTask();
        }}
      >
        <div className="flex flex-row justify-between items-start">
          <div className="flex-1">
            <p>{task.title}</p>
          </div>
          <TaskDetails task={task} />
        </div>
        {daysLeft <= 2 ? (
          <Info
            message={
              daysLeft < 0
                ? "Deadline passed"
                : daysLeft === 0
                ? "Deadline today"
                : `Deadline in ${daysLeft} days`
            }
            variant={daysLeft < 0 ? "error" : "warning"}
          />
        ) : (
          <>
            <p className="text-gray-500 text-sm font-thin">
              {DateUtil.getDayDifference(new Date(task.expireDate))} days left.
            </p>
          </>
        )}
      </div>
    </>
  );
}
