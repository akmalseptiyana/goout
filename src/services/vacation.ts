import supabase from "@/config/supabaseClient";

export async function getVacationItems() {
  let { data, error } = await supabase
    .from("items")
    .select("*")
    .neq("title", "Bali - Nusa Penida Island Tour");

  if (error) {
    throw new Error("Failed to fetch data");
  }

  return data;
}

export async function getSingleVacationItem(title: string) {
  let { data, error } = await supabase
    .from("items")
    .select("*")
    .eq("title", title)
    .single();

  if (error) {
    throw new Error("Failed to fetch data");
  }

  return data;
}

export async function getVacationDetails(id: string) {
  let { data, error } = await supabase
    .from("items")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Failed to fetch data");
  }

  return data;
}
