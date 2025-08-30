import { queryClient, QueryKeys } from "@/config/query.config";
import { useDragStore } from "@/hooks/drag.store";
import type { ICategoryDto } from "@/services/category/category.dto";
import { TaskService } from "@/services/task/task.service";
import { useState } from "react";

export default function DropArea({
  category,
  index,
}: {
  category: ICategoryDto;
  index: number;
}) {
  const [show, setShow] = useState(false);
  const dragTask = useDragStore((s) => s.task);

  const onDrop = async () => {
    if (!dragTask) {
      return;
    }
    const position = index;

    console.log(
      `new place will be :${category.title} -> index: ${index}-> position: ${position}`
    );
    await TaskService.move(dragTask?.id, {
      categoryId: category.id,
      position: position,
    });
    await queryClient.invalidateQueries({
      queryKey: [QueryKeys.TASKS],
      type: "all",
    });
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
        setShow(false);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      Drop here
    </section>
  );
}
