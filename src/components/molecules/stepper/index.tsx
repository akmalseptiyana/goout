import { useState } from "react";

import { Steps } from "@/types";

interface StepperProps {
  steps: Steps;
  initialStep?: string;
  children: any;
}

export function Stepper({ steps, initialStep, children }: StepperProps) {
  const stepsKeys = Object.keys(steps);

  const [CurrentStep, setCurrentStep] = useState(
    stepsKeys.indexOf(initialStep!) > -1 ? initialStep : stepsKeys[0],
  );
  const totalStep = stepsKeys.length;
  const indexStep = stepsKeys.indexOf(CurrentStep!);

  function prevStep() {
    if (+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1]);
  }

  function nextStep() {
    if (+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep + 1]);
  }

  return <>{children(prevStep, nextStep, CurrentStep, steps)}</>;
}

export * from "./numbering";
export * from "./meta";
export * from "./controller";
export * from "./mainContent";
