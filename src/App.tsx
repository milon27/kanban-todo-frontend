import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
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
    <div>
      <ErrorBoundary fallbackRender={fallbackRender}>
        <RootRouter />
      </ErrorBoundary>
    </div>
  );
}
