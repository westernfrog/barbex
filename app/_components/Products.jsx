"use client";

import {
  HeartIcon,
  MaximizeIcon,
  ShoppingBagIcon,
  StarIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";

const products = [
  {
    name: "New Fresh Wash",
    price: "$56.00",
    rating: 4,
    img: "https://images.unsplash.com/photo-1624939461078-66a124b3539c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "New Fresh Wash",
    price: "$51.39",
    rating: 4,
    img: "https://images.unsplash.com/photo-1593560369164-8f3a8facd0e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "New Fresh Wash",
    price: "$63.87",
    rating: 4,
    img: "https://images.unsplash.com/photo-1605683131665-1394d008c5bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "New Fresh Wash",
    price: "$47.89",
    rating: 4,
    img: "https://images.unsplash.com/photo-1596221168861-5fc89ac18431?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Products(params) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="max-w-xl mx-auto flex items-center justify-center py-10">
          <div className="relative text-center pt-16">
            <h4 className="text-xl text-primary font-medium tracking-tight mb-2">
              Our Products
            </h4>
            <h2 className="lg:text-4xl text-2xl tracking-tight font-semibold">
              Evoke the experience of one of our barber shops
            </h2>
            <div className="absolute z-0 inset-0 lg:top-0 top-8">
              <h1 className="lg:text-9xl text-6xl text-dark/5 tracking-tighter font-medium">
                Products
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {products.map((item, index) => (
            <div key={index} className="lg:col-span-3 col-span-6 space-y-6">
              <div className="relative shadow">
                <Image
                  src={item.img}
                  width={500}
                  height={500}
                  alt={item.name}
                  className="w-full h-80 object-cover object-center"
                />
                <div className="group absolute z-10 inset-0 hover:bg-dark/70 transition-all duration-500 ease-in-out rounded-md">
                  <div className="-translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 flex flex-col justify-end h-full gap-y-6 p-6 transition-all duration-500 ease-in-out">
                    <button className="flex">
                      <div className="bg-white p-3 rounded-full">
                        <ShoppingBagIcon size={20} className="stroke-dark" />
                      </div>
                    </button>
                    <button className="flex">
                      <div className="bg-white p-3 rounded-full">
                        <HeartIcon size={20} className="stroke-dark" />
                      </div>
                    </button>
                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="flex"
                    >
                      <div className="bg-white p-3 rounded-full">
                        <MaximizeIcon size={20} className="stroke-dark" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-1.5 text-center">
                <div className="flex items-center justify-center gap-1 mb-4">
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
                <h4 className="font-semibold text-xl tracking-tight">
                  {item.name}
                </h4>
                <p className="text-primary font-medium">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <Dialog
            open={selectedProduct !== null}
            onClose={() => setSelectedProduct(null)}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
              <DialogPanel className="">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="block ms-auto text-primary font-medium mb-2"
                >
                  <XIcon size={24} className="stroke-white/60" />
                </button>
                <Image
                  src={selectedProduct.img}
                  width={500}
                  height={500}
                  alt={selectedProduct.name}
                  className="h-[600px] object-cover object-center rounded"
                />
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </section>
    </>
  );
}
