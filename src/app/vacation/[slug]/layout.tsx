import type { Metadata } from "next";

import { Footer } from "@/components/organisms/footer";
import { Navbar } from "@/components/organisms/navbar";

export const metadata: Metadata = {
  title: "Details | Goout",
};

export default function DetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="container mt-[1.88rem]">
        <Navbar />
      </header>
      {children}
      <Footer />
    </>
  );
}
