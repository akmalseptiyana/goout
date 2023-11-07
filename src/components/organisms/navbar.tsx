"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MobileNav } from "./mobile-nav";
import { Logo } from "../atoms/logo";
import { cn } from "@/utils/classnames";

export function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex w-full items-center justify-between">
      <div>
        <Link href="/" className="hidden md:block">
          <Logo withText />
        </Link>
        <button
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <X size={28} className="text-primary" /> : <Logo />}
          <span className="text-xl font-bold text-primary">Menu</span>
        </button>
      </div>
      <div className="hidden md:block">
        <ul className="inline-flex items-center gap-[30px]">
          <li>
            <Link
              href="/"
              className={cn(
                "text-center text-base",
                pathname === "/"
                  ? "font-medium text-primary"
                  : "text-[#9C9C9C]",
              )}
            >
              Home
            </Link>
          </li>
          <li className="text-center text-base font-normal text-[#9C9C9C]">
            Flight
          </li>
          <li className="text-center text-base font-normal text-[#9C9C9C]">
            Hotel
          </li>
          <li className="text-center text-base font-normal text-[#9C9C9C]">
            Travel Package
          </li>
          <li className="text-center text-base font-normal text-[#9C9C9C]">
            Contact Us
          </li>
        </ul>
      </div>
      <div>
        {showMobileMenu && <MobileNav />}
        <button className="inline-flex shrink-0 items-center justify-center rounded-xl bg-primary/10 px-6 py-3 text-base font-medium text-primary">
          My Account
        </button>
      </div>
    </nav>
  );
}
