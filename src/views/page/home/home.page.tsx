import { authClient } from "@/lib/auth-client";

export default function HomePage() {
  return (
    <div>
      Home.Page
      <button
        onClick={async () => {
          await authClient.signOut();
        }}
      >
        logout
      </button>
    </div>
  );
}
