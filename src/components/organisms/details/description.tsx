import {
  CalendarDays,
  GanttChartSquare,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Separator } from "@/components/atoms/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/molecules/tabs";

export function PageDetailDesription() {
  return (
    <section className="container">
      <Tabs defaultValue="overview" className="mt-10">
        <TabsList className="gap-x-5">
          <TabsTrigger
            value="overview"
            className="bg-transparent p-0 text-xl font-normal text-[#7B7B7B] data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-secondary md:text-2xl"
          >
            Overview
          </TabsTrigger>
          <Separator orientation="vertical" className="h-[1.56rem]" />
          <TabsTrigger
            disabled
            value="what's included"
            className="bg-transparent p-0 text-xl font-normal text-[#7B7B7B] data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-secondary md:text-2xl"
          >
            What&apos;s Included
          </TabsTrigger>
          <Separator orientation="vertical" className="h-[1.56rem]" />
          <TabsTrigger
            disabled
            value="tour details"
            className="bg-transparent p-0 text-xl font-normal text-[#7B7B7B] data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-secondary md:text-2xl"
          >
            Tour details
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="overview"
          className="mt-5 grid max-w-[53rem] grid-cols-1 gap-x-8 gap-y-6 p-0 md:grid-cols-2"
        >
          <div className="flex gap-x-3">
            <CalendarDays size={24} className="text-secondary" />
            <div>
              <h3 className="text-lg font-medium text-[#232631]">
                Travel Style: 1-to-Foursomethings
              </h3>
              <p className="mt-1 max-w-[23.25rem] text-base font-normal text-[#7B7B7B]">
                Fast, fresh, and fun adventures that never slow down, made for
                young, budget-minded travellers.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <GanttChartSquare size={24} className="text-secondary" />
            <div>
              <h3 className="text-lg font-medium text-[#232631]">
                Service Level: Basic
              </h3>
              <p className="mt-1 max-w-[23.25rem] text-base font-normal text-[#7B7B7B]">
                Simple and clean hotels and motels; affordable public and
                private transport; lots of optional activities.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <ShieldCheck size={24} className="text-secondary" />
            <div>
              <h3 className="text-lg font-medium text-[#232631]">
                Physical Rating: 2 - Light
              </h3>
              <p className="mt-1 max-w-[23.25rem] text-base font-normal text-[#7B7B7B]">
                Light walking and hiking suitable for most fitness levels.
                Nothing too challenging.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <Users size={24} className="text-secondary" />
            <div>
              <h3 className="text-lg font-medium text-[#232631]">
                Trip Type: Small Group
              </h3>
              <p className="mt-1 max-w-[23.25rem] text-base font-normal text-[#7B7B7B]">
                Small group experience; Max 20, avg 12.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <Separator
        orientation="horizontal"
        className="mt-8 w-full lg:w-[53rem]"
      />
      <p className="mt-8 max-w-[47.625rem] text-base font-normal text-[#232631]">
        Now’s the time to explore Bali - Nusa Penida Island on your terms with
        this tour that’s affordable for young travellers. Watch the sunset
        through the Beach of Bali, stretch out on white-sand beaches, drift
        through the tranquil backwaters, and rise dawn to see the sunrise -
        trush us, it’s worth not hitting snooze. This seven-day tour offers a
        quick yet intimate introduction to the diversity of south India. Unwind
        with free time or some yoga, meet the local people, and spend the night
        with a local family. How’s that sound for an authentic cultural
        experience?
      </p>
    </section>
  );
}
