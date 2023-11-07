"use client";

import { ChangeEvent, useState } from "react";
import Link from "next/link";

import {
  Stepper,
  Controller,
  MainContent,
  Meta,
  Numbering,
} from "@/components/molecules/stepper";
import { BookingInformation } from "@/components/organisms/checkout/booking-information";
import { Completed } from "@/components/organisms/checkout/completed";
import { Payment } from "@/components/organisms/checkout/payment";
import { Button } from "@/components/atoms/button";
import { KeyofStep, Steps } from "@/types";

export default function CheckoutPage() {
  const [state, setState] = useState({
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cardNumber: "",
      cardName: "",
      cvc: "",
    },
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      data: {
        ...data,
        [event.target.name]: event.target.value,
      },
    });
  };

  const { data } = state;

  const checkout = {
    id: "1",
    amount: 2,
  };

  const steps = {
    bookingInformation: {
      title: "Booking Information",
      description: "Please fill up the blank fields below",
      content: (
        <BookingInformation
          data={data}
          checkout={checkout}
          onChange={onChange}
        />
      ),
    },
    payment: {
      title: "Payment",
      description: "Kindly follow the instructions below",
      content: <Payment data={data} checkout={checkout} onChange={onChange} />,
    },
    completed: {
      title: "Yay! Completed",
      description: null,
      content: <Completed />,
    },
  };

  return (
    <Stepper steps={steps}>
      {(
        prevStep: () => string,
        nextStep: () => string,
        CurrentStep: KeyofStep,
        steps: Steps,
      ) => (
        <>
          <Numbering
            data={steps}
            current={CurrentStep}
            className="mt-[4.375rem]"
          />
          <Meta data={steps} current={CurrentStep} />
          <MainContent data={steps} current={CurrentStep} />

          {CurrentStep === "bookingInformation" && (
            <Controller>
              {data.firstName !== "" &&
                data.lastName !== "" &&
                data.email !== "" &&
                data.phone !== "" && (
                  <Button className="w-[300px] text-base" onClick={nextStep}>
                    Continue to Book
                  </Button>
                )}
              <Button asChild variant="ghost" className="w-[300px] text-base">
                <Link href={`/vacation/${checkout.id}`}>Cancel</Link>
              </Button>
            </Controller>
          )}

          {CurrentStep === "payment" && (
            <Controller>
              {data.cardNumber !== "" &&
                data.cardName !== "" &&
                data.cvc !== "" && (
                  <Button className="w-[300px] text-base" onClick={nextStep}>
                    Confirm Payment
                  </Button>
                )}
              <Button
                variant="ghost"
                className="w-[300px] text-base"
                onClick={prevStep}
              >
                Cancel
              </Button>
            </Controller>
          )}

          {CurrentStep === "completed" && (
            <Controller>
              <Button asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </Controller>
          )}
        </>
      )}
    </Stepper>
  );
}
