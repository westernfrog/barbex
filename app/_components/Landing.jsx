"use client";

import { ArrowLeftIcon, ArrowRightIcon, ChevronsRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Landing(params) {
  const images = [
    "https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1514336937476-a5b961020a5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const overview = [{}];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <section className="h-screen">
        <section className="absolute inset-0 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((item, index) => (
              <div
                key={index}
                className="w-screen h-screen flex-shrink-0 relative"
              >
                <Image
                  src={item}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-dark/90"></div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute z-40 lg:bottom-1/2 bottom-5 lg:left-10 left-6 transform -translate-y-1/2 ring-1 ring-primary hover:bg-primary hover:text-white text-primary lg:p-3 p-1 rounded-full transition duration-300 ease-in-out"
          >
            <ArrowLeftIcon className="lg:w-auto w-4 lg:h-6 h-auto" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute z-40 lg:bottom-1/2 bottom-5 lg:right-10 right-6 transform -translate-y-1/2 ring-1 ring-primary hover:bg-primary hover:text-white text-primary lg:p-3 p-1 rounded-full transition duration-300 ease-in-out"
          >
            <ArrowRightIcon className="lg:w-auto w-4 lg:h-6 h-auto" />
          </button>
          <div className="absolute lg:bottom-10 bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-4 bg-white rounded-full ${
                  currentIndex === index ? "bg-opacity-100" : "bg-opacity-50"
                }`}
              ></div>
            ))}
          </div>
        </section>
        <div className="relative h-screen flex items-center text-white max-w-7xl mx-auto lg:pt-20 pt-0">
          <div className="grid lg:grid-cols-12 gap-x-10">
            <div className="col-span-6">
              <h4 className="text-primary font-medium text-xl mb-4">
                Welcome to our Barbex
              </h4>
              <h1 className="lg:text-7xl text-5xl font-medium tracking-tight lg:leading-[5rem]">
                Best Hair Salon for a Professional Look
              </h1>
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 bg-primary text-white px-8 py-4"
                >
                  Read More <ChevronsRightIcon size={18} />
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-2 ring-1 ring-primary text-primary px-8 py-4"
                >
                  View All Services <ChevronsRightIcon size={18} />
                </Link>
              </div>
            </div>
            <div className="col-span-6"></div>
          </div>
        </div>
      </section>
    </>
  );
}
