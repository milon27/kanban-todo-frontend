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
import { RouteUrl } from "@/views/router/url";
import { Link } from "react-router-dom";
import { useRegisterController } from "./register.controller";

export default function RegisterPage() {
  const { onSubmit, register, errors } = useRegisterController();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Create account
          </CardTitle>
          <CardDescription className="text-gray-600">
            Sign up for a new account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register("name")}
                className="w-full"
              />
              {errors.name && <Info message={errors.name.message} />}
            </div>
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
            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword")}
                className="w-full"
              />
              {errors.confirmPassword && (
                <Info message={errors.confirmPassword.message} />
              )}
            </div>
            <Button type="submit" className="w-full" size="lg">
              Sign up
            </Button>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to={RouteUrl.LOGIN}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
