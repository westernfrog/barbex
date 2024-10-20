import { CalendarDaysIcon, ChevronsRightIcon } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    category: "Haircutting",
    date: "30 June, 2022",
    title: "We are a Haircut Salon Based in South Melbourne",
    image:
      "https://images.unsplash.com/photo-1593702288056-7927b442d0fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "read-more-link-1",
  },
  {
    category: "Hair Color",
    date: "25 June, 2022",
    title: "Online booking appointment For Salon, Hair Salon",
    image:
      "https://images.unsplash.com/photo-1588771930296-88c2cb03f386?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "read-more-link-2",
  },
  {
    category: "Lather Shave",
    date: "21 June, 2022",
    title: "Customising your shave is Fun and easy",
    image:
      "https://images.unsplash.com/photo-1484291150605-0860ed671f04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "read-more-link-3",
  },
];

export default function Blogs(params) {
  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="max-w-xl mx-auto w-full flex items-center justify-center py-10">
          <div className="relative text-center pt-16 w-full">
            <h4 className="text-xl text-primary font-medium tracking-tight mb-2">
              Blog and Article
            </h4>
            <h2 className="lg:text-4xl text-2xl tracking-tight font-semibold">
              Read our Blogs and News
            </h2>
            <div className="absolute z-0 inset-0 lg:top-0 top-8">
              <h1 className="lg:text-9xl text-6xl text-dark/5 tracking-tighter font-medium">
                Our News
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="lg:col-span-4 col-span-12">
              <div className="relative overflow-hidden flex flex-col">
                <Image
                  src={post.image}
                  width={500}
                  height={500}
                  alt={post.category}
                  className="w-full h-96 object-cover object-center hover:scale-125 transition duration-500 ease-in-out"
                />
                <div className="relative bg-white px-8 py-6">
                  <div className="flex flex-wrap items-center gap-8">
                    <h4 className="px-4 py-2 bg-primary text-white">
                      {post.category}
                    </h4>
                    <div className="flex items-center gap-2 tracking-tight font-medium">
                      <CalendarDaysIcon className="stroke-primary" size={20} />
                      {post.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold tracking-tight py-6">
                    {post.title}
                  </h2>
                  <button className="flex items-center gap-2">
                    Read More <ChevronsRightIcon size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
