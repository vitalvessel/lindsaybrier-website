import Link from "next/link";
import { PrimaryNav } from "@/components/PrimaryNav";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="logo">
        <img
          className="logo-lockup"
          src="/images/logo-lockup.webp"
          alt="Dr. Lindsay Brier, Holistic Chiropractor"
          width={932}
          height={249}
        />
      </Link>
      <PrimaryNav />
    </header>
  );
}
