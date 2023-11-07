import Image from "next/image";
import { MapPin, Star } from "lucide-react";

import { Button } from "@/components/atoms/button";
import { VacationItemTypes } from "@/services/types";

export function DestinationCard({
  image,
  country,
  unit,
  title,
  price,
  city,
  rating,
}: VacationItemTypes) {
  return (
    <div className="h-[26.5625rem] w-[17.9375rem] rounded-3xl bg-white shadow-[0_14px_25px_0_#f2f2f2]">
      <figure className="relative">
        <Image
          src={`/${image}`}
          alt={title}
          width={287}
          height={286}
          quality={90}
          className="h-[286px] w-[287px] rounded-3xl"
        />
        <div className="absolute right-4 top-4 flex items-center gap-x-1 rounded-full bg-[rgba(255,255,255,0.10)] px-3 py-1 backdrop-blur-lg">
          <Star width={18} height={17} fill="#FF7A00" color="#FF7A00" />
          <span className="text-base font-medium text-white">
            {rating.toFixed(1)}
          </span>
        </div>
      </figure>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#232631]">{title}</h3>
        <span className="flex items-center gap-x-1 text-base font-normal text-[#7B7B7B]">
          <MapPin size={16} className="text-[##D9D9D9]" />{" "}
          {`${city}, ${country}`}
        </span>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-base font-normal text-[#7B7B7B]">
            <span className="text-lg font-semibold text-[#232631]">
              ${price}
            </span>
            /{unit}
          </p>
          <Button size="sm" className="text-base font-normal">
            Book
          </Button>
        </div>
      </div>
    </div>
  );
}
