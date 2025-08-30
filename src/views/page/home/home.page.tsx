import Header from "@/views/components/common/header";
import FullScreenLoading from "@/views/components/common/loading";
import { Button } from "@/views/components/ui/button";
import { Pencil } from "lucide-react";
import ErrorPage from "../error/error.page";
import { useHomeController } from "./home.controller";

export default function HomePage() {
  const { categories, isLoading, error } = useHomeController();

  if (isLoading) {
    return <FullScreenLoading />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <div>
      <Header />
      {/* content : kanban board*/}
      <div className="container mx-auto min-h-screen overflow-x-scroll">
        {/* render category/ column */}
        <div className="flex flex-row gap-x-4">
          {categories?.map((category) => (
            <div key={category.id} className="min-w-xs p-4 cursor-grab">
              {/* each column */}
              <div className="mb-4 flex flex-row justify-between items-center ">
                <p className="text-xl font-bold text-gray-800">
                  {category.title}
                </p>
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
          ))}
        </div>
      </div>
    </div>
  );
}
