import { useUser } from "@/hooks/use-user.hook";
import { type PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { RouteUrl } from "./url";

export function PublicRoute({ children }: PropsWithChildren) {
  const { user, loading } = useUser();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-around">
        <p>Loading...</p>
      </div>
    );
  }

  if (user) return <Navigate to={RouteUrl.HOME} />;
  return <>{children}</>;
}
