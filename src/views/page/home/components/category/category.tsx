import type { ICategoryDto } from "@/services/category/category.dto";
import { Button } from "@/views/components/ui/button";
import { Pencil } from "lucide-react";

export default function Category({ category }: { category: ICategoryDto }) {
  return (
    <div key={category.id} className="min-w-xs p-4 cursor-grab">
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
          <div className="p-4 bg-gray-50 rounded-lg shadow">Item 1</div>
          <div className="p-4 bg-gray-50 rounded-lg shadow">Item 2</div>
          <div className="p-4 bg-gray-50 rounded-lg shadow">Item 3</div>
        </div>
      ) : (
        <div className="space-y-3">
          <Button>Create</Button>
        </div>
      )}
    </div>
  );
}
