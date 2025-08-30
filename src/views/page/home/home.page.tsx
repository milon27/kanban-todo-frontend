import Header from "@/views/components/common/header";
import FullScreenLoading from "@/views/components/common/loading";
import ErrorPage from "../error/error.page";
import Category from "./components/category/category";
import { useHomeController } from "./home.controller";

export default function HomePage() {
  const { categories, tasks, isLoading, error } = useHomeController();

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
            <Category
              key={category.id}
              category={category}
              tasks={tasks || []}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
