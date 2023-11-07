import { KeyofStep, Steps } from "@/types";

interface MetaProps {
  data: Steps;
  current: KeyofStep;
}

export function Meta({ data, current }: MetaProps) {
  return (
    <div className="text-center">
      <h1 className="mt-[3.125rem] text-center text-2xl font-semibold text-[#232631] md:text-4xl">
        {data[current] && data[current].title}
      </h1>
      <p className="mt-1 text-center text-base font-light text-[#7B7B7B] md:text-lg">
        {data[current] && data[current].description}
      </p>
    </div>
  );
}
