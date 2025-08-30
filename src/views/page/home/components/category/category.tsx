import type { ICategoryDto } from "@/services/category/category.dto";
import type { ITaskDto } from "@/services/task/task.dto";
import { Button } from "@/views/components/ui/button";
import { Pencil } from "lucide-react";
import React from "react";
import Task from "../task";
import DropArea from "./drop-area";

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
      <div className="flex flex-row justify-between items-center">
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
        <div>
          {/* drop area */}
          {<DropArea category={category} index={1} />}
          {tasksByCategory.length === 0 ? (
            <></>
          ) : (
            <>
              {tasksByCategory.map((task, index) => (
                <React.Fragment key={task.id}>
                  <Task task={task} />
                  {/* drop area */}
                  {<DropArea category={category} index={index + 2} />}
                </React.Fragment>
              ))}
            </>
          )}
          <Button className="w-full" variant={"outline"}>
            Create New Task
          </Button>
        </div>
      ) : (
        <div className="space-y-3 mt-5">
          <Button>Create</Button>
        </div>
      )}
    </div>
  );
}
