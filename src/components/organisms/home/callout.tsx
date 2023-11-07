import Image from "next/image";

import { Button } from "@/components/atoms/button";

export function Callout() {
  return (
    <section className="mt-[7.5rem] lg:container">
      <div className="relative bg-secondary/10 p-4 py-[4.69rem] lg:rounded-b-3xl lg:rounded-tl-[6.25rem] lg:bg-earth-map lg:bg-[top_-1.75rem_left_1.12rem] lg:bg-no-repeat">
        <div className=" text-center">
          <span className="text-base font-semibold text-secondary">
            New User
          </span>
          <h2 className="mx-auto max-w-[31.75rem] text-2xl font-semibold text-[#232631] md:text-4xl md:leading-[3.15rem]">
            Dont Miss The 50% Discount If You Register Today
          </h2>
          <p className="mx-auto mt-3 max-w-[19.875rem] text-base font-normal leading-[1.875rem] text-[#232631]">
            Let&apos;s maximize your next holiday with us with the best
            experience.
          </p>
          <Button className="mt-[1.875rem] text-lg">Register Account</Button>
        </div>
        <div className="absolute right-[-3.125rem] top-[-3.125rem] hidden h-[6.25rem] w-[6.25rem] items-center justify-center rounded-full bg-white drop-shadow-[0_0_25px_rgba(0,0,0,0.13)] lg:flex">
          <svg
            width="68"
            height="68"
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_409)">
              <path
                d="M14.0577 32.3496L37.8194 17.538L52.631 41.2997L30.8495 54.877C29.7559 55.5587 28.3167 55.2247 27.635 54.1311L14.0577 32.3496Z"
                fill="#FF6363"
              />
              <circle
                cx="25.9385"
                cy="24.9437"
                r="14"
                transform="rotate(-31.9369 25.9385 24.9437)"
                fill="#FF6363"
              />
              <circle
                cx="45.2253"
                cy="29.4188"
                r="14"
                transform="rotate(-31.9369 45.2253 29.4188)"
                fill="#FF6363"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_409">
                <rect
                  width="56"
                  height="56"
                  fill="white"
                  transform="translate(13.0532 0.395996) rotate(13.0631)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="mt-10 h-[12rem] w-full rounded-3xl bg-white p-4 lg:absolute lg:bottom-[-2.62rem] lg:left-[3.13rem] lg:w-[15.625rem] lg:shadow-[0_14px_25px_0_#F2F2F2]">
          <div className="flex items-center gap-x-1">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                fill="#FF7A00"
              />
            </svg>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                fill="#FF7A00"
              />
            </svg>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                fill="#FF7A00"
              />
            </svg>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                fill="#FF7A00"
              />
            </svg>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                fill="#FF7A00"
              />
            </svg>
          </div>
          <p className="mt-2 text-base font-medium text-[#232631] lg:max-w-[11.6875rem]">
            Thank you for helping my vacation. Amazing!
          </p>
          <div className="mt-[1.875rem] flex items-center gap-x-3">
            <Image
              src="/images/sova-nerds.png"
              alt="nova nerds backpacker"
              width={54}
              height={54}
              quality={90}
              className="rounded-full"
            />
            <div>
              <h3 className="text-base font-medium text-black">Sova Nerds</h3>
              <span className="text-sm font-normal text-black">Backpacker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
