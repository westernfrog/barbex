import { InstagramIcon, SendIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footer = [
  "Trend Haircut",
  "Hair Washing",
  "Hair Coloring",
  "Facial Hair Trim",
];

const socialPost = [
  {
    title: "",
    href: "",
    image:
      "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    href: "",
    image:
      "https://images.unsplash.com/photo-1593702288056-7927b442d0fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    href: "",
    image:
      "https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    href: "",
    image:
      "https://images.unsplash.com/photo-1463430144406-394c977562d7?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    href: "",
    image:
      "https://images.unsplash.com/photo-1596362601603-b74f6ef166e4?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    href: "",
    image:
      "https://images.unsplash.com/photo-1693755807658-17ce5331aacb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Footer(params) {
  return (
    <>
      <footer className="relative lg:mt-64 mt-28 lg:pt-48 lg:p-0 p-6 pb-10 bg-dark text-white">
        <div className="lg:absolute lg:inset-x-16 inset-x-6 -top-20">
          <div className="grid grid-cols-12 gap-6 pb-20">
            {socialPost.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="relative lg:col-span-2 col-span-6"
              >
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  alt="/"
                  className="w-full h-48 object-cover object-center"
                />
                <div className="group absolute inset-0 hover:bg-primary/50 transition duration-300 ease-in-out flex items-center justify-center">
                  <InstagramIcon
                    size={36}
                    className="group-hover:opacity-100 opacity-0 transition ease-in-out duration-700"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 pb-20">
          <div>
            <h1 className="text-4xl font-semibold tracking-tighter mb-6">
              Barbex
            </h1>
            <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {footer.map((item, index) => (
                <li key={index} className="text-lg">
                  <Link
                    href="#services"
                    className="hover:text-primary transition duration-300 ease-in-out"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <form className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-transparent ring-1 ring-white/20 p-6 lg:w-96 w-full"
            />
            <button type="submit" className="bg-primary p-6">
              <SendIcon className="" size={24} />
            </button>
          </form>
        </div>
        <div className="border-t border-white/20 py-8">
          <div className="max-w-7xl mx-auto">
            <h4 className="text-lg">Copyright © 2024 Barbex Website by Aman</h4>
          </div>
        </div>
      </footer>
    </>
  );
}
