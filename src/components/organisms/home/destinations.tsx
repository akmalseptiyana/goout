import { Button } from "@/components/atoms/button";
import { DestinationCard } from "@/components/molecules/destination-card";

export function Destinations() {
  return (
    <section className="container mt-[7.5rem]">
      <h2 className="text-center text-2xl font-semibold text-[#232631] lg:text-4xl">
        Explore Natural Destinations
      </h2>
      <p className="mx-auto mt-4 max-w-[24.3125rem] text-center text-base font-normal text-[#7B7B7B] lg:leading-[1.875rem]">
        A new way to travel by air the easy and fast way. Try it now by filling
        out the form below!
      </p>
      <ul className="mt-[3.75rem] flex flex-wrap justify-center gap-[1.875rem]">
        {destinationList.map((item, index) => (
          <li key={index}>
            <DestinationCard {...item} />
          </li>
        ))}
      </ul>
      <div className="mt-[3.75rem] text-center">
        <Button variant="outline" size="pill" className="h-[3.4375rem] text-lg">
          View More
        </Button>
      </div>
    </section>
  );
}

const destinationList = [
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
  {
    image: "images/high-ground.png",
    title: "High Ground",
    country: "Indonesia",
    city: "Bali",
    rating: 5,
    price: 49,
    unit: "person",
  },
  {
    image: "images/dinosaur-land.png",
    title: "Dinosaur Land",
    country: "Indonesia",
    city: "Bali",
    rating: 5,
    price: 5,
    unit: "person",
  },
  {
    image: "images/turttle-land.png",
    title: "Turttle Land",
    country: "Indonesia",
    city: "Bali",
    rating: 5,
    price: 5,
    unit: "person",
  },
  {
    image: "images/cliffside-beach.png",
    title: "The Cliffside Beach",
    country: "Indonesia",
    city: "Bali",
    rating: 5,
    price: 5,
    unit: "person",
  },
];
