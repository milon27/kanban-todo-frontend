import Info from "@/views/components/common/info";
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
import { Label } from "@radix-ui/react-label";
import { useCategoryController } from "./category.controller";

export default function AddCategory() {
  const { open, setOpen, createErrors, createRegister, onCreateCategory } =
    useCategoryController();

  return (
    <div className="w-full p-2 flex justify-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Crate Category</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add new category</DialogTitle>
            <DialogDescription>
              e.g. In Review, In Pr, Deployed etc
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-4">
            <div className="flex flex-row justify-between items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                className="col-span-3"
                {...createRegister("title")}
              />
            </div>
            {createErrors.title && (
              <Info message={createErrors.title.message} />
            )}
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={() => {
                onCreateCategory();
                setOpen(false);
              }}
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
