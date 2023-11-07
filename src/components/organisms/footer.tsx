import { Logo } from "../atoms/icons";

export function Footer() {
  return (
    <footer className="mt-52 flex items-center bg-[#232631] bg-footer-logo bg-[right_bottom_-1rem] bg-no-repeat py-[6.25rem] lg:bg-[bottom_-1rem_right_3.76rem]">
      <div className="container flex flex-wrap gap-x-28 gap-y-10">
        <section>
          <div className="flex items-center gap-x-2">
            <Logo color="#ffffff" />
            <span className="text-2xl font-semibold text-white">Goout</span>
          </div>
          <p className="mt-3 max-w-[9.625rem] text-[#E0E7FA]">
            Copyright © 2022. All Rights Reserved.
          </p>
        </section>
        <section className="flex flex-wrap gap-x-[6.25rem] gap-y-10">
          {footerLinks.map(({ heading, links }, index) => {
            return (
              <div key={index}>
                <h3 className="font-medium text-white">{heading}</h3>
                <ul className="mt-4 space-y-[0.88rem]">
                  {links.map((link) => (
                    <li key={link} className="text-[#A1A1A3]">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </section>
      </div>
    </footer>
  );
}

const footerLinks: { heading: string; links: string[] }[] = [
  {
    heading: "Page Menus",
    links: ["Home", "About Us", "Contact Us", "My Account"],
  },
  {
    heading: "Our Product",
    links: ["Booking Flight", "Booking Hotels", "Trip Package"],
  },
  {
    heading: "Social Media",
    links: ["Twitter", "Tiktok", "Facebook", "Instagram"],
  },
];
