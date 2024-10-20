import { ChevronsRightIcon } from "lucide-react";

export default function About(params) {
  return (
    <>
      <section className="max-w-7xl mx-auto pt-20">
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="col-span-6"></div>
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
              Haircut" is a term used to describe when a person removes the hair
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
