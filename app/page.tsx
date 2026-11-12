import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { BookButton } from "@/components/BookButton";
import { Envelope } from "@/components/Envelope";
import { Header } from "@/components/Header";
import { subheader } from "@/lib/copy";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <div className="stage">
          <div className="hero-copy">
            <h1>
              <span className="line">Feel More Like</span>
              <span className="line">Your True Self.</span>
            </h1>
            <p className="lede">{subheader}</p>
            <BookButton />
          </div>

          <div className="hero-art">
            <img
              src="/images/spine.webp"
              width={701}
              height={1152}
              alt="Watercolor illustration of a spine flowing through lavender and blue washes, with botanical sprigs."
            />
          </div>

          <div className="love">
            <h2>
              <span className="line">A love letter to my</span>
              <span className="line">future practice member</span>
            </h2>
            <Link href="/letter" className="text-link">
              Read the Letter <Arrow />
            </Link>
          </div>

          <div className="envelope-wrap">
            <Envelope />
          </div>
        </div>

        <div className="stubs">
          <section id="approach" className="stub" aria-labelledby="approach-title">
            <h2 id="approach-title">Our approach</h2>
            <p>Coming soon</p>
          </section>
          <section
            id="first-visit"
            className="stub"
            aria-labelledby="first-visit-title"
          >
            <h2 id="first-visit-title">Your first visit</h2>
            <p>Coming soon</p>
          </section>
          <section id="about" className="stub" aria-labelledby="about-title">
            <h2 id="about-title">About Lindsay</h2>
            <p>Coming soon</p>
          </section>
        </div>
      </main>
    </>
  );
}
