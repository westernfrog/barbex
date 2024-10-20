"use client";

import { ChevronsRightIcon, PlayIcon } from "lucide-react";
import Image from "next/image";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function Contact(params) {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <section className="grid lg:grid-cols-12 pt-10 pb-20">
        <div className="relative col-span-7">
          <Image
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1000}
            height={1000}
            alt="Working Hours"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute z-10 inset-0 bg-dark/60"></div>
          <div className="absolute z-20 inset-0 flex items-center justify-center">
            <button
              onClick={open}
              className="bg-white lg:p-5 p-4 rounded-full pulse"
            >
              <PlayIcon className="fill-primary stroke-primary" size={36} />
            </button>
            <Dialog
              open={isOpen}
              as="div"
              className="relative z-10 focus:outline-none"
              onClose={close}
            >
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-dark/80">
                <div className="flex min-h-full items-center justify-center p-4">
                  <DialogPanel
                    transition
                    className="w-full max-w-md transition duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                  >
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=TReuDpXE5vcvMo7r"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </DialogPanel>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
        <div className="col-span-5 lg:p-16 p-8 bg-primary text-white">
          <div className="max-w-4xl mx-auto flex items-center justify-center py-10">
            <div className="relative text-center lg:pt-16">
              <div className="absolute z-0 inset-0 lg:top-0 -top-6">
                <h1 className="lg:text-9xl text-6xl text-white/10 tracking-tighter font-medium">
                  Working
                </h1>
              </div>
              <h2 className="lg:text-4xl text-2xl tracking-tight font-semibold mb-4">
                Working Hours
              </h2>
              <p className="text-lg">
                Fusce id lorem risus. Duis mattis, nulla et placerat pretium,
                purus ex luctus nisi,
              </p>
              <div className="space-y-8 py-10">
                <div className="flex items-center justify-between border-b-2 border-dashed border-white pb-4">
                  <h4 className="lg:text-2xl text-lg">Monday</h4>
                  <h4 className="lg:text-2xl text-lg">9 AM - 6 PM</h4>
                </div>
                <div className="flex items-center justify-between border-b-2 border-dashed border-white pb-4">
                  <h4 className="lg:text-2xl text-lg">Thursday</h4>
                  <h4 className="lg:text-2xl text-lg">11 AM - 8 PM</h4>
                </div>
                <div className="flex items-center justify-between border-b-2 border-dashed border-white pb-4">
                  <h4 className="lg:text-2xl text-lg">Wednesday</h4>
                  <h4 className="lg:text-2xl text-lg">6 AM - 4 PM</h4>
                </div>
              </div>
              <div className="lg:pt-8">
                <button className="flex lg:me-auto mx-auto items-center gap-2 text-lg ring-1 ring-white text-white font-medium tracking-tight px-6 py-4">
                  Booking Appointment <ChevronsRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
