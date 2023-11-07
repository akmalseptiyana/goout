import Image from "next/image";
import Link from "next/link";
import { MapPin, Star } from "lucide-react";

import { Button } from "@/components/atoms/button";

export function TripPackage() {
  return (
    <section className="container mt-[8.25rem] flex justify-center">
      <div className="flex flex-wrap items-center gap-x-[3.75rem] gap-y-10">
        <div className="order-2 w-full md:max-w-max">
          <span className="text-base font-semibold text-secondary">
            Our Package
          </span>
          <h2 className="mt-1 text-2xl font-semibold text-[#232631] lg:text-4xl">
            Popular Trip Packages
          </h2>
          <p className="mt-3 max-w-[25.5625rem] text-base font-normal leading-[1.875rem] text-[#7B7B7B]">
            A new way to travel by air the easy and fast way. Try it now by
            filling out the form below!
          </p>
          <ul className="mt-[1.875rem] flex flex-col gap-[1.625rem] md:flex-row">
            <li>
              <span className="text-xl font-semibold text-[#232631]">120+</span>
              <br />
              <span className="text-base font-normal text-[#7B7B7B]">
                Destination
              </span>
            </li>
            <li>
              <span className="text-xl font-semibold text-[#232631]">560+</span>
              <br />
              <span className="text-base font-normal text-[#7B7B7B]">
                Luxury Hotels
              </span>
            </li>
            <li>
              <span className="text-xl font-semibold text-[#232631]">
                135K+
              </span>
              <br />
              <span className="text-base font-normal text-[#7B7B7B]">
                Happy Tourists
              </span>
            </li>
          </ul>
          <div className="mt-[1.875rem] flex flex-wrap items-center gap-[1.875rem]">
            <Button asChild className="w-full text-lg md:max-w-max">
              <Link href="/vacation/1">Choose Package</Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full text-lg text-[#7B7B7B] md:max-w-max"
            >
              View More
            </Button>
          </div>
        </div>
        <div className="order-1 flex flex-wrap">
          <div className="flex h-[25.25rem] w-[19rem] shrink-0 items-center justify-center rounded-3xl border-4 border-secondary">
            <figure className="relative before:absolute before:inset-0 before:block before:h-full before:w-full before:rounded-3xl before:bg-gradient-to-b before:from-black/0 before:to-black/30 before:content-['']">
              <Image
                src="/images/greatest-tower.png"
                alt="Greatest Tower Bali"
                width={280}
                height={380}
                quality={90}
              />
              <div className="absolute bottom-7 left-6">
                <div className="flex items-center gap-x-[.125rem]">
                  <Star size={14} color="#FF7A00" fill="#FF7A00" />
                  <Star size={14} color="#FF7A00" fill="#FF7A00" />
                  <Star size={14} color="#FF7A00" fill="#FF7A00" />
                  <Star size={14} color="#FF7A00" fill="#FF7A00" />
                  <Star size={14} color="#FF7A00" fill="#FF7A00" />
                </div>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  Greatest Tower
                </h3>
                <span className="flex items-center gap-x-1 text-base font-normal text-[#EDEDED]">
                  <MapPin size={16} className="text-[##D9D9D9]" /> Bali,
                  Indonesia
                </span>
              </div>
            </figure>
          </div>
          <div className="flex h-[25.25rem] w-[19rem] shrink-0 items-center justify-center rounded-3xl">
            <figure className="relative before:absolute before:inset-0 before:block before:h-full before:w-full before:rounded-3xl before:bg-gradient-to-b before:from-black/0 before:to-black/30 before:content-['']">
              <Image
                src="/images/cliffside-beach.png"
                alt="Greatest Tower Bali"
                width={280}
                height={380}
                quality={90}
              />
              <div className="absolute bottom-7 left-6">
                <div className="flex items-center gap-x-[.125rem]">
                  <Star size={14} color="#FF7A00" fill="#FF7A00" />
                  <Star size={14} color="#FF7A00" fill="#FF7A00" />
                  <Star size={14} color="#FF7A00" fill="#FF7A00" />
                  <Star size={14} color="#FF7A00" fill="#FF7A00" />
                  <Star size={14} color="#FF7A00" fill="#FF7A00" />
                </div>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  The Cliffside Beach
                </h3>
                <span className="flex items-center gap-x-1 text-base font-normal text-[#EDEDED]">
                  <MapPin size={16} className="text-[##D9D9D9]" /> Bali,
                  Indonesia
                </span>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
