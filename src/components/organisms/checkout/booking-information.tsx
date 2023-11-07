import Image from "next/image";

import { Separator } from "@/components/atoms/separator";
import { Label } from "@/components/atoms/label";
import { Input } from "@/components/atoms/input";
import { FormData } from "@/types";

interface BookingInformationProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  data: FormData;
  checkout: {
    id: string;
    amount: number;
  };
}

export function BookingInformation({
  data,
  checkout,
  onChange,
}: BookingInformationProps) {
  return (
    <section className="container">
      <div className="flex flex-wrap justify-center gap-x-20 lg:justify-start xl:pl-[116px]">
        <div className="mt-10 max-w-[420px] lg:mt-20">
          <figure className="relative h-[270px] w-full overflow-hidden rounded-2xl md:w-[420px]">
            <Image
              src="/images/1.png"
              alt="greatest tower"
              fill
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover", objectPosition: "center -50px" }}
            />
          </figure>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-y-2">
            <div className="w-full">
              <h3
                className="truncate text-xl font-normal text-[#232631]"
                title="Nusa Penida Island Tour"
              >
                Nusa Penida Island Tour
              </h3>
              <span className="text-base font-light text-[#7B7B7B]">
                Bali, Indonesia
              </span>
            </div>
            <div className="text-base font-medium text-[#232631]">
              $1024 USD <span className="font-light text-[#7B7B7B]">per</span> 2
              nights
            </div>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="mt-[3.125rem] hidden h-[432px] lg:block"
        />
        <div className="mt-10 w-full space-y-4 lg:mt-20 lg:max-w-[322px]">
          <div>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              type="text"
              value={data.firstName}
              id="firstname"
              name="firstName"
              placeholder="Please type here..."
              className="mt-2"
              onChange={onChange}
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              value={data.lastName}
              id="lastName"
              name="lastName"
              placeholder="Please type here..."
              className="mt-2"
              onChange={onChange}
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              value={data.email}
              id="email"
              name="email"
              placeholder="Please type here..."
              className="mt-2"
              onChange={onChange}
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              type="tel"
              value={data.phone}
              id="phone"
              name="phone"
              placeholder="Please type here..."
              className="mt-2"
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
