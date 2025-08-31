import { queryClient } from "@/config/query.config";
import { useUser } from "@/hooks/use-user.hook";
import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";

export default function Header() {
  const { user } = useUser();

  const handleLogout = async () => {
    await authClient.signOut();
    queryClient.clear();
    sessionStorage.clear();
  };

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
      <h1 className="text-xl font-bold text-gray-900">⚡️ flash todo</h1>
      <div className="flex items-center gap-3">
        {user && user.name && (
          <span className="text-gray-700 font-medium">{user.name}</span>
        )}
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
}
