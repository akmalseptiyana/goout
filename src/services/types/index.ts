export interface VacationItemTypes {
  id: string;
  country: string;
  unit: string;
  title: string;
  price: number;
  city: string;
  rating: number;
  description: string | null;
  image: string;
}

export interface BookingDataTypes {
  amount: number;
  card_holder_name: string;
  card_number: number;
  cvc: number;
  email: string;
  first_name: string;
  item_id: string;
  last_name: string;
  phone_number: number;
}
