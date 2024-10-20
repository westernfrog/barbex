import { ChevronsRightIcon, StarIcon } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Devin Booker",
    role: "Regular User",
    image:
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    feedback:
      "Proin vel ipsum id risus ultricies scelerisque. Suspendisse mattis sit amet leo vel convallis.",
  },
  {
    name: "Michelle Yeoh",
    role: "Regular User",
    image:
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    feedback:
      "Proin vel ipsum id risus ultricies scelerisque. Suspendisse mattis sit amet leo vel convallis.",
  },
];

export default function Testimonial(params) {
  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-4 col-span-12">
            <div className="max-w-xl flex items-center">
              <div className="relative pt-16">
                <h4 className="text-xl text-primary font-medium tracking-tight mb-2">
                  Testimonial
                </h4>
                <h2 className="lg:text-4xl text-2xl tracking-tight font-semibold pb-4">
                  What Our Customer Say&apos;s
                </h2>
                <p className="text-lg">
                  Barber Trading Style and Proven Strategy to Make a Living
                </p>
                <div className="pt-12">
                  <button className="flex items-center gap-2 text-lg bg-primary text-white font-medium tracking-tight px-6 py-4">
                    Booking Appointment <ChevronsRightIcon />
                  </button>
                </div>
                <div className="absolute z-0 inset-0 lg:top-0 top-8">
                  <h1 className="lg:text-9xl text-6xl text-dark/5 tracking-tighter font-medium">
                    Testimonials
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative lg:col-span-4 col-span-12 bg-white p-10"
            >
              <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt="Profile"
                  className="w-24 h-24 object-cover object-center rounded-full"
                />
                <p className="text-lg">{item.feedback}</p>
                <div className="flex items-center justify-center gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      size={20}
                      className={`${
                        i < item.rating
                          ? "fill-primary stroke-primary"
                          : "stroke-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold text-xl tracking-tight mb-2">
                    {item.name}
                  </h4>
                  <p className="font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="relative col-span-4 bg-white"></div>
        </div>
      </section>
    </>
  );
}
