export type StepItem = {
  title: string;
  description: string | null;
  content: React.ReactNode;
};

export type Steps = {
  bookingInformation: StepItem;
  payment: StepItem;
  completed: StepItem;
};

export type KeyofStep = "bookingInformation" | "payment" | "completed";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cardNumber: string;
  cardName: string;
  cvc: string;
};
