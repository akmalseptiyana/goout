import Image from "next/image";

export function Completed() {
  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <div className="row justify-content-center text-center">
        <div>
          <Image
            src="/completed.svg"
            alt="complete"
            width={362}
            height={330}
            quality={90}
            className="mx-auto mt-[1.875rem]"
          />
          <p className="mx-auto mt-5 max-w-[396px] text-lg font-light text-[#7B7B7B]">
            We will inform you via email later once the transaction has been
            accepted
          </p>
        </div>
      </div>
    </div>
  );
}
