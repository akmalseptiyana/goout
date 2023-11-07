import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "../atoms/logo";
import { cn } from "@/utils/classnames";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-0 top-20 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden">
      <div className="relative z-20 grid gap-6 rounded-md bg-[#FAFAFA] p-4 shadow-md">
        <Link href="/">
          <Logo withText />
        </Link>
        <nav>
          <ul className="flex flex-col gap-4">
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
            <li className="text-base font-normal text-[#9C9C9C]">Flight</li>
            <li className="text-base font-normal text-[#9C9C9C]">Hotel</li>
            <li className="text-base font-normal text-[#9C9C9C]">
              Travel Package
            </li>
            <li className="text-base font-normal text-[#9C9C9C]">Contact Us</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
