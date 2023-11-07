import supabase from "@/config/supabaseClient";
import { BookingDataTypes } from "./types";

export async function setNewBooking(bookingData: BookingDataTypes) {
  let { data, error } = await supabase.rpc("newbooking", {
    ...bookingData,
  });

  if (error) {
    throw new Error("failed create new booking");
  }

  return data;
}
