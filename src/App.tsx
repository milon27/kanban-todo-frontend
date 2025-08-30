import { QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { queryClient } from "./config/query.config";
import { Toaster } from "./views/components/ui/sonner";
import ErrorPage from "./views/page/error/error.page";
import { RootRouter } from "./views/router/root.router";

export default function App() {
  const fallbackRender = ({ error, resetErrorBoundary }: FallbackProps) => {
    return (
      <ErrorPage
        error={error as Error}
        resetErrorBoundary={resetErrorBoundary}
      />
    );
  };

  return (
    <div className="">
      <ErrorBoundary fallbackRender={fallbackRender}>
        <QueryClientProvider client={queryClient}>
          <RootRouter />
          <Toaster />
        </QueryClientProvider>
      </ErrorBoundary>
    </div>
  );
}
