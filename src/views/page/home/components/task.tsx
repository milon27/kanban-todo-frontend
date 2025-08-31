import { useDragStore } from "@/hooks/drag.store";
import { cn } from "@/lib/utils";
import type { ITaskDto } from "@/services/task/task.dto";

export default function Task({ task }: { task: ITaskDto }) {
  const { setTask, removeTask, task: dragTask } = useDragStore();

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
        {task.title}
      </div>
    </>
  );
}
