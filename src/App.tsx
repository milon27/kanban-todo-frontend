import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";

export default function App() {
  return (
    <div>
      <Card>
        <CardContent className="space-y-4">
          <h1 className="text-3xl font-bold underline">
            {" "}
            Hello world! from tailwind
          </h1>
          <Input placeholder="Input From Shadcn" />
          <Button variant={"default"}>Btn From Shadcn</Button>
          <Button variant={"outline"}>Btn From Shadcn</Button>
        </CardContent>
      </Card>
    </div>
  );
}
