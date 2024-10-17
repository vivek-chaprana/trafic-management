import { BarChart2 } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center gap-1" href="#">
        <BarChart2 className="h-6 w-6" />
        <span className="font-bold">TrafficFlow AI</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#how-it-works"
        >
          How it Works
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#test-model"
        >
          Test Model
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#tech-stack"
        >
          Tech Stack
        </Link>
      </nav>
    </header>
  );
}
