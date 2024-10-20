import { ChevronsRightIcon, PhoneIcon, SearchIcon } from "lucide-react";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Pages", href: "/" },
  { name: "Shop", href: "/" },
  { name: "Blog", href: "/" },
  { name: "Contact", href: "/" },
];

export default function Header(params) {
  return (
    <>
      <header className="sticky z-50 top-0 inset-x-0 bg-dark text-white">
        <div className="flex items-center justify-between lg:px-16 px-6 py-6">
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
        </div>
      </header>
    </>
  );
}
