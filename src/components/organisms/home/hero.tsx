import Image from "next/image";
import { Search } from "lucide-react";

import { Separator } from "@/components/atoms/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/molecules/tabs";
import { MapPin, Calendar, LocateFixed, Seat } from "@/components/atoms/icons";
import { Button } from "@/components/atoms/button";

export function Hero() {
  return (
    <section className="mt-[1.88rem] lg:container">
      <div className="bg-[#FAFAFA] px-4 py-10 lg:rounded-3xl xl:relative xl:p-0">
        <div className="flex flex-wrap justify-between gap-y-4">
          <div className="xl:py-[6.5rem] xl:pl-[3.75rem]">
            <h1 className="max-w-[31.8125rem] text-3xl font-bold text-[#232631] md:text-4xl xl:text-[3.25rem] xl:leading-normal">
              Find The Best Place to Stress Release
            </h1>
            <p className="max-w-[24.3125rem] text-base font-normal leading-[1.875rem] text-[#7B7B7B]">
              A new way to travel by air the easy and fast way. Try it now by
              filling out the form below!
            </p>
          </div>
          <figure>
            <Image
              src="/images/hero.png"
              alt="homestay"
              priority
              width={600}
              height={580}
              quality={90}
              className="rounded-3xl"
            />
          </figure>
        </div>
        <Tabs
          defaultValue="flight"
          className="mt-12 w-full max-w-[72.5rem] xl:absolute xl:bottom-10 xl:left-10"
        >
          <TabsList>
            <TabsTrigger value="flight" className="rounded-tl-xl">
              Flight
            </TabsTrigger>
            <TabsTrigger value="hotel" className="rounded-tr-xl" disabled>
              Hotel
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="flight"
            className="flex flex-col gap-y-10 xl:flex-row xl:items-center xl:justify-between"
          >
            <div className="flex flex-wrap items-center gap-x-[1.87rem] gap-y-5 xl:h-[3.1875rem]">
              <div className="flex w-full items-center xl:max-w-max">
                <MapPin className="mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-[#232631]">
                    NTB, Lombok
                  </h3>
                  <p className="text-base font-normal text-[#848484]">
                    Select the locations
                  </p>
                </div>
                <LocateFixed className="ml-auto xl:ml-5" />
              </div>
              <Separator orientation="vertical" className="hidden xl:block" />
              <Separator orientation="horizontal" className="xl:hidden" />
              <div className="flex w-full items-center xl:max-w-max">
                <Calendar className="mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-[#232631]">
                    9 Juni 2022
                  </h3>
                  <p className="text-base font-normal text-[#848484]">
                    Choose Flight Date
                  </p>
                </div>
                <LocateFixed className="ml-auto xl:ml-5" />
              </div>
              <Separator orientation="vertical" className="hidden xl:block" />
              <Separator orientation="horizontal" className="xl:hidden" />
              <div className="flex w-full items-center xl:max-w-max">
                <Seat className="mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-[#232631]">
                    Economy
                  </h3>
                  <p className="text-base font-normal text-[#848484]">
                    Choose Flight type
                  </p>
                </div>
                <LocateFixed className="ml-auto xl:ml-5" />
              </div>
            </div>
            <Button className="flex items-center gap-x-[10px] text-lg">
              <Search className="text-white" />
              Search Flight
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
