import { BookingForm } from "@/components/organisms/details/booking-form";
import { PageDetailDesription } from "@/components/organisms/details/description";
import { FeaturedImage } from "@/components/organisms/details/featured-image";
import { Rating } from "@/components/organisms/details/rating";
import { Recommendation } from "@/components/organisms/details/recommendation";
import { getVacationDetails } from "@/services/vacation";

export default async function DetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getVacationDetails(params.slug);

  return (
    <main className="mb-[7.5rem] mt-10">
      <h1 className="container text-3xl font-semibold text-[#232631] md:text-4xl">
        {data.title}
      </h1>
      <section className="container mt-6 flex flex-wrap justify-between gap-y-20">
        <FeaturedImage />
        <BookingForm item={data} />
      </section>
      <PageDetailDesription item={data} />
      <Recommendation />
      <Rating />
    </main>
  );
}
