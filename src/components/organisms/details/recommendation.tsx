import { DestinationCard } from "@/components/molecules/destination-card";

export function Recommendation() {
  return (
    <section className="container">
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-[#232631] md:text-3xl">
          Recommended for you
        </h3>
        <ul className="mt-4 flex flex-wrap justify-center gap-[1.875rem]">
          {recommendations.map((item, index) => (
            <li key={index}>
              <DestinationCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const recommendations = [
  {
    image: "images/waterfall-haven.png",
    title: "Waterfall Haven",
    country: "Iceland",
    city: "Selajan",
    rating: 5,
    price: 9,
    unit: "person",
  },
  {
    image: "images/greatest-mountain.png",
    title: "Greatest Mountain",
    country: "Italy",
    city: "Wildsee",
    rating: 5,
    price: 12,
    unit: "person",
  },
  {
    image: "images/coconut-tree-river.png",
    title: "Coconut Tree River",
    country: "Indonesia",
    city: "Lombok",
    rating: 5,
    price: 6,
    unit: "person",
  },
  {
    image: "images/circle-beach-play.png",
    title: "Circle Beach Play",
    country: "Indonesia",
    city: "Lombok",
    rating: 5,
    price: 5,
    unit: "person",
  },
];
