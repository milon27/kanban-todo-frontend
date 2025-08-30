interface IErrorPage {
  error: Error;
  resetErrorBoundary?: () => void;
}

export default function ErrorPage({ error, resetErrorBoundary }: IErrorPage) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error?.message}</p>
      <button
        type="submit"
        onClick={() => {
          if (resetErrorBoundary) resetErrorBoundary();
        }}
      >
        Try again
      </button>
    </div>
  );
}
