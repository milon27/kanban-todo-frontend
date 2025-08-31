import { queryClient, QueryKeys } from "@/config/query.config";
import { useDragStore } from "@/hooks/drag.store";
import type { ICategoryDto } from "@/services/category/category.dto";
import { TaskService } from "@/services/task/task.service";
import { useState } from "react";
import { toast } from "sonner";

export default function DropArea({
  category,
  index,
}: {
  category: ICategoryDto;
  index: number;
}) {
  const [show, setShow] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const { task: dragTask, removeTask } = useDragStore();

  const onDrop = async () => {
    if (!dragTask) {
      return;
    }
    const position = index;
    setIsUpdating(true);
    try {
      await TaskService.move(dragTask?.id, {
        categoryId: category.id,
        position: position,
      });
      await queryClient.invalidateQueries({
        queryKey: [QueryKeys.TASKS],
        type: "all",
      });
      // Clear the drag state after successful move
      removeTask();
      toast.success(`Task moved to ${category.title}`);
    } catch (error) {
      console.error("Failed to move task:", error);
      toast.error("Failed to move task. Please try again.");
    } finally {
      setIsUpdating(false);
      setShow(false);
    }
  };

  return (
    <section
      className={
        show
          ? "opacity-100 text-center rounded-md transition-all ease-in-out duration-75 py-5 border border-dashed border-gray-500 my-1"
          : "opacity-0 "
      }
      onDragEnter={() => setShow(true)}
      onDragLeave={() => setShow(false)}
      onDrop={() => {
        onDrop();
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      {isUpdating ? "Moving..." : "Drop here"}
    </section>
  );
}
