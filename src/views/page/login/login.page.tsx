import Info from "@/views/components/common/info";
import { Button } from "@/views/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/views/components/ui/card";
import { Input } from "@/views/components/ui/input";
import { useLoginController } from "./login.controller";

export default function LoginPage() {
  const { onSubmit, register, errors } = useLoginController();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    onSubmit();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Welcome back
          </CardTitle>
          <CardDescription className="text-gray-600">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="w-full"
              />
              {errors.email && <Info message={errors.email.message} />}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className="w-full"
              />
              {errors.password && <Info message={errors.password.message} />}
            </div>
            <Button type="submit" className="w-full" size="lg">
              Sign in
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
