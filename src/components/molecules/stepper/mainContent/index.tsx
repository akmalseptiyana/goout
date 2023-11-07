import { KeyofStep, Steps } from "@/types";

interface MainContentProps {
  data: Steps;
  current: KeyofStep;
}

export function MainContent({ data, current }: MainContentProps) {
  return <div>{data[current] && data[current].content}</div>;
}
