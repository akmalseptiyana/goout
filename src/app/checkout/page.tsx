"use client";

import { ChangeEvent, useState, useEffect, useCallback } from "react";
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
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { VacationItemTypes } from "@/services/types";
import { getVacationDetails } from "@/services/vacation";
import { setNewBooking } from "@/services/booking";

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
  const [item, setItem] = useState<VacationItemTypes | null>(null);
  const [checkout, dispatch] = useGlobalContext();

  const getItem = useCallback(async (id: string) => {
    const data = await getVacationDetails(id);
    setItem(data);
  }, []);

  useEffect(() => {
    getItem(checkout.id);
  }, [checkout.id, getItem]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      data: {
        ...data,
        [event.target.name]: event.target.value,
      },
    });
  };

  const { data } = state;

  async function submitHandler(nextStep: () => void) {
    const newBooking = await setNewBooking({
      amount: checkout.amount,
      card_holder_name: data.cardName,
      card_number: Number(data.cardNumber),
      cvc: Number(data.cvc),
      email: data.email,
      first_name: data.firstName,
      item_id: checkout.id,
      last_name: data.lastName,
      phone_number: Number(data.phone),
    });

    nextStep();
  }

  const steps = {
    bookingInformation: {
      title: "Booking Information",
      description: "Please fill up the blank fields below",
      content: (
        <BookingInformation
          data={data}
          itemDetails={item}
          checkout={checkout}
          onChange={onChange}
        />
      ),
    },
    payment: {
      title: "Payment",
      description: "Kindly follow the instructions below",
      content: (
        <Payment
          data={data}
          itemDetails={item}
          checkout={checkout}
          onChange={onChange}
        />
      ),
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
                  <Button
                    className="w-[300px] text-base"
                    onClick={() => submitHandler(nextStep)}
                  >
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
