import type { Metadata } from "next";

import { Footer } from "@/components/organisms/footer";
import { Callout } from "@/components/organisms/home/callout";
import { Destinations } from "@/components/organisms/home/destinations";
import { Hero } from "@/components/organisms/home/hero";
import { TripPackage } from "@/components/organisms/home/package";
import { Service } from "@/components/organisms/home/service";
import { Navbar } from "@/components/organisms/navbar";

export const metadata: Metadata = {
  title: "Home | Goout",
};

export default function HomePage() {
  return (
    <>
      <header className="container mt-[1.88rem]">
        <Navbar />
      </header>
      <main>
        <Hero />
        <Service />
        <TripPackage />
        <Destinations />
        <Callout />
      </main>
      <Footer />
    </>
  );
}
