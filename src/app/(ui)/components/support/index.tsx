"use client";
import SupportChat from "./SupportChat";
import Faq from "./Fansque"
export default function SupportSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <Faq />
      <SupportChat />
    </section>
  );
}
