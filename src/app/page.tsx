import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import wedding from "@/assets/wedding.jpg";
import { LayoutSection } from "@/components/LayoutSection";

export default function Home() {
  const test = "hello";

  const links = [
    { label: "Timer", url: "#timer" },
    { label: "Ablauf", url: "#ablauf" },
    { label: "Übernachtung", url: "#uber" },
    { label: "Other", url: "#other", target: "_blank" },
    { label: "About", url: "/about" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar links={links} />
      <Hero title="Anna & Frank" content="Some content" image={wedding} />
      <LayoutSection title="Die Location">
        <div>Get together</div>
        <div>Hochzeit</div>
      </LayoutSection>

      <LayoutSection title="Ablauf des wochenende">
        <div>Get together</div>
        <div>Hochzeit</div>
      </LayoutSection>
    </main>
  );
}
