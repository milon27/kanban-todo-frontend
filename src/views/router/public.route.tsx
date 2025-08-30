import { useUser } from "@/hooks/use-user.hook";
import { type PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import FullScreenLoading from "../components/common/loading";
import { RouteUrl } from "./url";

export function PublicRoute({ children }: PropsWithChildren) {
  const { user, loading } = useUser();

  if (loading) {
    return <FullScreenLoading />;
  }

  if (user) return <Navigate to={RouteUrl.HOME} />;
  return <>{children}</>;
}
