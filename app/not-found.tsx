import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-7xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 text-2xl font-bold text-fg">Page not found</h1>
      <p className="mt-2 max-w-md text-muted">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/">
          <Button variant="whatsapp">Back to Home</Button>
        </Link>
        <Link href="/categories">
          <Button variant="email">Browse Products</Button>
        </Link>
      </div>
    </div>
  );
}
