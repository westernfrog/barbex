"use client";

import {
  ChevronsRightIcon,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Pages", href: "/" },
  { name: "Shop", href: "/" },
  { name: "Blog", href: "/" },
  { name: "Contact", href: "/" },
];

export default function Header(params) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed z-50 top-0 inset-x-0 bg-dark text-white">
        <div className="flex items-center justify-between lg:px-16 px-6 lg:py-6 py-4">
          <div className="flex items-center divide-x divide-white">
            <Link
              href="/"
              className="text-2xl font-semibold tracking-tighter pe-6"
            >
              Barbex
            </Link>
            <div className="lg:flex hidden items-center gap-4 ps-6">
              <div className="ring-1 ring-white p-2 rounded-full">
                <PhoneIcon size={18} />
              </div>
              <Link
                href="tel:+125 (895) 658"
                className="font-medium tracking-tight hover:text-primary transition duration-500 ease-in-out"
              >
                Hotline +125 (895) 658
              </Link>
            </div>
          </div>
          <nav className="lg:block hidden">
            <ul className="flex items-center gap-12">
              {navigation.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition duration-500 ease-in-out"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button>
                  <SearchIcon size={20} />
                </button>
              </li>
              <li>
                <button className="flex items-center gap-1 font-medium bg-primary text-white px-6 py-3 custom-btn btn-11">
                  Booking Now
                  <ChevronsRightIcon size={22} strokeWidth={1.5} />
                </button>
              </li>
            </ul>
          </nav>
          <button className="lg:hidden block" onClick={() => setOpen(true)}>
            <MenuIcon size={26} />
          </button>
          <Transition show={open}>
            <Dialog className="relative z-50" onClose={setOpen}>
              <TransitionChild
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray bg-opacity-75 transition-opacity" />
              </TransitionChild>
              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                    <TransitionChild
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <DialogPanel className="pointer-events-auto relative w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-dark text-white p-6 shadow-xl">
                          <div className="flex justify-end">
                            <button className="" onClick={() => setOpen(false)}>
                              <XIcon size={28} strokeWidth={1.5} />
                            </button>
                          </div>
                          <nav className="relative mt-6 flex-1 divide-y divide-dark/60">
                            {navigation.map((item, index) => (
                              <div key={index}>
                                <Link
                                  href={item.href}
                                  onClick={() =>
                                    setTimeout(() => setOpen(false), 500)
                                  }
                                  className="block py-4 border-b-2 border-dashed border-white text-xl"
                                >
                                  {item.name}
                                </Link>
                              </div>
                            ))}
                            <div className="flex items-center gap-2 py-10">
                              <div className="ring-1 ring-white p-2 rounded-full">
                                <PhoneIcon size={14} />
                              </div>
                              <Link
                                href="tel:+125 (895) 658"
                                onClick={() =>
                                  setTimeout(() => setOpen(false), 500)
                                }
                                className="block text-lg"
                              >
                                Hotline +125 (895) 658
                              </Link>
                            </div>
                          </nav>
                        </div>
                      </DialogPanel>
                    </TransitionChild>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </header>
    </>
  );
}
