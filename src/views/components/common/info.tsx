export default function Info({
  message,
  variant = "error",
}: {
  variant?: "error" | "success" | "warning";
  message?: string;
}) {
  const variantStyles = {
    error: "bg-red-50 border-red-200 text-red-800 border-l-4 border-l-red-500",
    success:
      "bg-green-50 border-green-200 text-green-800 border-l-4 border-l-green-500",
    warning:
      "bg-yellow-50 border-yellow-200 text-yellow-800 border-l-4 border-l-yellow-500",
  };

  if (!message) {
    return null;
  }

  return (
    <div className={`p-4 rounded-md border ${variantStyles[variant]}`}>
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}
