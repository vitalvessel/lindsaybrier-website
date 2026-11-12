import type { Metadata } from "next";
import { Envelope } from "@/components/Envelope";
import { Header } from "@/components/Header";
import { letterParagraphs, letterSignoff, letterTitle } from "@/lib/copy";

export const metadata: Metadata = {
  title: "A love letter",
  description: "A love letter to my future practice member.",
};

export default function LetterPage() {
  return (
    <>
      <Header />
      <main id="main" className="letter-page">
        <div className="envelope-wrap envelope-wrap-letter">
          <Envelope />
        </div>
        <article className="letter-sheet">
          <h1>{letterTitle}</h1>
          {letterParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <p className="signoff">{letterSignoff}</p>
        </article>
      </main>
    </>
  );
}
