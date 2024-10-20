import { ChevronsRightIcon, PhoneCallIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Appointment(params) {
  return (
    <>
      <section className="relative py-24">
        <div className="absolute -z-10 inset-0">
          <div className="w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1617391654484-2894196c2cc9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={1000}
              height={1000}
              alt="Booking"
              className="w-full lg:max-h-fit h-full object-cover object-center"
            />
            <div className="absolute z-0 inset-0 bg-dark/90"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between lg:p-0 p-10">
          <div className="max-w-lg flex items-center justify-center py-10">
            <div className="relative pt-16">
              <h4 className="text-xl text-primary font-medium tracking-tight mb-2">
                Booking Now
              </h4>
              <h2 className="lg:text-4xl text-2xl tracking-tight font-medium text-white">
                Book your appointment online and call our salon
              </h2>
              <div className="absolute z-0 inset-0 lg:top-3 top-8">
                <h1 className="lg:text-9xl text-6xl text-white/5 tracking-tighter font-medium">
                  Booking
                </h1>
              </div>
              <div className="lg:pt-12 pt-6">
                <button className="flex items-center gap-2 text-lg bg-primary text-white font-medium tracking-tight px-6 py-4">
                  Booking Appointment <ChevronsRightIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white lg:w-fit w-full flex flex-col items-center gap-y-6 p-10 mt-10">
            <div className="bg-primary/30 p-4 rounded-full">
              <PhoneIcon
                className="stroke-primary"
                size={32}
                strokeWidth={1.5}
              />
            </div>
            <div className="text-center">
              <p>Call Now</p>
              <Link href="tel:+123 (568) 584" className="text-lg font-semibold">
                +123 (568) 584
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
