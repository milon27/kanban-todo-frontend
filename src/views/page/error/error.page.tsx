import { Button } from "@/views/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface IErrorPage {
  error: Error;
  resetErrorBoundary?: () => void;
}

export default function ErrorPage({ error, resetErrorBoundary }: IErrorPage) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="flex flex-col items-center bg-red-50 dark:bg-red-900/30 rounded-lg p-8 shadow-md max-w-md w-full">
        <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-2">
          Something went wrong!
        </h1>
        <p className="text-gray-700 dark:text-gray-200 mb-6 text-center">
          {error?.message}
        </p>
        {resetErrorBoundary && (
          <Button
            variant="destructive"
            onClick={resetErrorBoundary}
            className="w-full"
          >
            Try again
          </Button>
        )}
      </div>
    </div>
  );
}
