import { ChevronsRightIcon } from "lucide-react";
import Image from "next/image";

export default function About(params) {
  return (
    <>
      <section className="max-w-7xl mx-auto pt-20">
        <div className="grid lg:grid-cols-12 lg:gap-20 gap-6">
          <div className="col-span-6 grid grid-cols-12 grid-rows-12">
            <div className="col-span-8 row-span-12">
              <Image
                src="https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={500}
                height={500}
                alt="About Pic 1"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="lg:translate-x-6 -translate-x-3 lg:translate-y-6 -translate-y-20 col-span-4 transition duration-300 ease-in-out row-span-6">
              <Image
                src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={500}
                height={500}
                alt="About Pic 2"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="-translate-x-20 translate-y-20 col-span-4 transition duration-300 ease-in-out row-span-6">
              <Image
                src="https://images.unsplash.com/photo-1463430144406-394c977562d7?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={500}
                height={500}
                alt="About Pic 3"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="col-span-6 space-y-4">
            <div className="max-w-xl flex items-center justify-center">
              <div className="relative pt-16">
                <h4 className="text-xl text-primary font-medium tracking-tight mb-2">
                  About Us
                </h4>
                <h2 className="lg:text-4xl text-2xl tracking-tight font-semibold">
                  Best Haircut Salons For Men Women
                </h2>
                <div className="absolute z-0 inset-0 lg:top-0 top-8">
                  <h1 className="lg:text-9xl text-6xl text-dark/5 tracking-tighter font-medium">
                    About
                  </h1>
                </div>
              </div>
            </div>
            <p className="text-lg pb-4">
              Haircut is a term used to describe when a person removes the hair
              on their head. This is done to allow for better access to the part
              of the body that needs cutting.
            </p>
            <div className="border-s-4 border-primary">
              <p className="text-xl ps-4">
                We&apos;re a leading independent salon in Dubai, offering
                everything from haircuts to exfoliation and
              </p>
            </div>
            <div className="pt-6">
              <button className="flex items-center gap-2 bg-primary px-8 py-4 text-white">
                Read More <ChevronsRightIcon size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
