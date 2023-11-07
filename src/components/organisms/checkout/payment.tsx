import Image from "next/image";

import { Separator } from "@/components/atoms/separator";
import { Label } from "@/components/atoms/label";
import { Input } from "@/components/atoms/input";
import { FormData } from "@/types";
import { VacationItemTypes } from "@/services/types";
import { formatValueToCurrency } from "@/utils/currency";

interface PaymentProps extends React.InputHTMLAttributes<HTMLInputElement> {
  data: FormData;
  itemDetails: VacationItemTypes | null;
  checkout: {
    id: string;
    amount: number;
  };
}

export function Payment({
  data,
  itemDetails,
  checkout,
  onChange,
}: PaymentProps) {
  const tax = 10;
  const subTotal = itemDetails?.price! * checkout.amount;
  const serviceFee = (subTotal * tax) / 100;
  const grandTotal = subTotal + serviceFee;

  return (
    <section className="container">
      <div className="flex flex-wrap justify-center gap-x-20 lg:justify-start xl:pl-44">
        <div className="mt-10 h-[402px] w-full max-w-[350px] rounded bg-white px-3.5 py-5 pb-10 shadow-md">
          <figure className="relative h-[150px] w-full overflow-hidden rounded-2xl md:w-[323px]">
            <Image
              src="/images/1.png"
              alt="greatest tower"
              fill
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover", objectPosition: "center -100px" }}
            />
          </figure>
          <div className="mt-4">
            <h3
              className="text-xl font-normal text-[#232631]"
              title="Nusa Penida Island Tour"
            >
              {itemDetails?.title}
            </h3>
            <span className="text-base font-light text-[#7B7B7B]">
              {itemDetails?.city}, {itemDetails?.country}
            </span>
          </div>
          <Separator orientation="horizontal" className="mt-5" />
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <span className="flex-1 text-base font-normal text-[#232631]">
                Subtotal
              </span>
              <span className="text-base font-medium text-[#232631]">
                {formatValueToCurrency(subTotal)}
              </span>
            </div>
            <div className="flex items-center">
              <span className="flex-1 text-base font-normal text-[#232631]">
                Service fee
              </span>
              <span className="text-base font-medium text-[#232631]">
                {formatValueToCurrency(serviceFee)}
              </span>
            </div>
            <div className="flex items-center">
              <span className="flex-1 text-base font-normal text-[#232631]">
                Total
              </span>
              <span className="text-base font-medium text-[#232631]">
                {formatValueToCurrency(grandTotal)}
              </span>
            </div>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="mt-[3.125rem] hidden h-[432px] lg:block"
        />
        <div className="mt-10 w-full space-y-4 lg:mt-20 lg:max-w-[322px]">
          <div className="flex items-center gap-x-2">
            <span className="text-lg font-light text-[#7B7B7B]">Pay with:</span>
            <figure className="flex items-center gap-x-1">
              <Image src="/visa.svg" alt="visa" width={40} height={40} />
              <Image
                src="/american-express.svg"
                alt="american express"
                width={40}
                height={40}
              />
              <Image
                src="/mastercard.svg"
                alt="mastercard"
                width={40}
                height={40}
              />
            </figure>
          </div>
          <div>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              type="number"
              value={data.cardNumber}
              id="cardNumber"
              name="cardNumber"
              placeholder="Please type here..."
              className="mt-2"
              onChange={onChange}
            />
          </div>
          <div>
            <Label htmlFor="cardName">Card Holder Name</Label>
            <Input
              type="text"
              value={data.cardName}
              id="cardName"
              name="cardName"
              placeholder="Please type here..."
              className="mt-2"
              onChange={onChange}
            />
          </div>
          <div>
            <Label htmlFor="cvc">CVC</Label>
            <Input
              type="number"
              value={data.cvc}
              id="cvc"
              name="cvc"
              placeholder="Please type here..."
              className="mt-2"
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
