import type { ICategoryDto } from "@/services/category/category.dto";
import type { ITaskDto } from "@/services/task/task.dto";
import { Button } from "@/views/components/ui/button";
import { Pencil } from "lucide-react";

export default function Category({
  category,
  tasks,
}: {
  category: ICategoryDto;
  tasks: ITaskDto[];
}) {
  const tasksByCategory = tasks.filter((t) => t.categoryId === category.id);

  return (
    <div key={category.id} className="min-w-xs p-4">
      {/* each column */}
      <div className="mb-4 flex flex-row justify-between items-center ">
        <p className="text-xl font-bold text-gray-800">{category.title}</p>
        {category.id > 0 && (
          <>
            <Button variant="ghost" size="icon" className="ml-2">
              <Pencil className="w-4 h-4" />
            </Button>
          </>
        )}
      </div>
      {category.id > 0 ? (
        <div className="space-y-3">
          {tasksByCategory.length === 0 ? (
            <div className="p-4 bg-gray-50 text-gray-400 font-thin rounded-lg">
              No tasks created yet
            </div>
          ) : (
            <>
              {tasksByCategory.map((task) => (
                <div
                  key={task.id}
                  className="p-4 bg-gray-50 rounded-lg shadow border border-gray-100 cursor-grab"
                >
                  {task.title}
                </div>
              ))}
            </>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          <Button>Create</Button>
        </div>
      )}
    </div>
  );
}
