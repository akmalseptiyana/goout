interface ControllerProps {
  children: React.ReactNode;
}

export function Controller({ children }: ControllerProps) {
  return (
    <div className="container pb-12">
      <div className="flex justify-center">
        <div className="mt-20 flex flex-col items-center gap-y-4 lg:mt-[3.125rem]">
          {children}
        </div>
      </div>
    </div>
  );
}
