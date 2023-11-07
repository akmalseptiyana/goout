import { cn } from "@/utils/classnames";
import { KeyofStep, Steps } from "@/types";

interface NumberingProps {
  className: string;
  data: Steps;
  current: KeyofStep;
}

export function Numbering({ className, data, current }: NumberingProps) {
  const KeysOfData = Object.keys(data);

  return (
    <ol className={cn("stepper flex items-center justify-center", className)}>
      {KeysOfData.map((list, index) => {
        let isActive = list === current ? "active" : "";
        if (index + 1 === KeysOfData.length) {
          isActive = "";
          return null;
        }

        return (
          <li
            key={`list-${index}`}
            className={cn(
              "relative flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full bg-[#e5e5e5] text-2xl font-medium text-[#898989]",
              "after:absolute after:z-10 after:h-[3.75rem] after:w-[3.75rem] after:scale-100 after:rounded-full after:bg-[#1abc9c] after:bg-[url(/check.svg)] after:bg-center after:bg-no-repeat after:transition-transform after:duration-300 after:ease-in-out after:content-['']",
              isActive,
            )}
          >
            {index + 1}
          </li>
        );
      })}
    </ol>
  );
}
