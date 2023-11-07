import Image from "next/image";

export function FeaturedImage() {
  return (
    <div className="grid w-full max-w-[768px] grid-cols-2 gap-4 md:h-[376px] md:grid-cols-4 md:grid-rows-2">
      <figure className="relative col-span-2 h-[376px] w-full overflow-hidden rounded-2xl md:row-span-2 md:h-full">
        <Image
          src="/images/1.png"
          alt="greatest tower"
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </figure>
      <figure className="relative h-[160px] w-full overflow-hidden rounded-2xl md:h-full">
        <Image
          src="/images/2.png"
          alt="greatest tower"
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </figure>
      <figure className="relative h-[160px] w-full overflow-hidden rounded-2xl md:h-full">
        <Image
          src="/images/3.png"
          alt="greatest tower"
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </figure>
      <figure className="relative h-[160px] w-full overflow-hidden rounded-2xl md:h-full">
        <Image
          src="/images/4.png"
          alt="greatest tower"
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "center bottom" }}
        />
      </figure>
      <figure className="relative h-[160px] w-full overflow-hidden rounded-2xl md:h-full">
        <Image
          src="/images/5.png"
          alt="greatest tower"
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "left" }}
        />
      </figure>
    </div>
  );
}
