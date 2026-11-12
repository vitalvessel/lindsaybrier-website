import Link from "next/link";
import { PrimaryNav } from "@/components/PrimaryNav";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="logo">
        <img
          className="logo-mark"
          src="/images/monogram.webp"
          alt=""
          width={634}
          height={733}
        />
        <span className="logo-text">
          <span className="logo-name">Dr. Lindsay Brier</span>
          <span className="logo-tag">Holistic Chiropractor</span>
        </span>
      </Link>
      <PrimaryNav />
    </header>
  );
}
