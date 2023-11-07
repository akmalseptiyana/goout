import { BookingForm } from "@/components/organisms/details/booking-form";
import { PageDetailDesription } from "@/components/organisms/details/description";
import { FeaturedImage } from "@/components/organisms/details/featured-image";
import { Rating } from "@/components/organisms/details/rating";
import { Recommendation } from "@/components/organisms/details/recommendation";

export default function DetailsPage() {
  return (
    <main className="mb-[7.5rem] mt-10">
      <h1 className="container text-3xl font-semibold text-[#232631] md:text-4xl">
        Bali - Nusa Penida Island Tour
      </h1>
      <section className="container mt-6 flex flex-wrap justify-between gap-y-20">
        <FeaturedImage />
        <BookingForm />
      </section>
      <PageDetailDesription />
      <Recommendation />
      <Rating />
    </main>
  );
}
