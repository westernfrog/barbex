import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {
  CheckIcon,
  ChevronsRightIcon,
  ScissorsLineDashedIcon,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    service: "Trend Haircut",
    content: "A modern and trendy haircut that suits your style.",
    logo: "",
    img: "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    service: "Hair Washing",
    content: "Relax with a refreshing hair wash using premium products.",
    logo: "",
    img: "https://images.unsplash.com/photo-1593702288056-7927b442d0fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    service: "Hair Color",
    content: "Change your look with vibrant hair coloring options.",
    logo: "",
    img: "https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    service: "Facial Hair Trim",
    content: "Keep your facial hair sharp and tidy with expert trimming.",
    logo: "",
    img: "https://images.unsplash.com/photo-1463430144406-394c977562d7?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    service: "Lather Shave",
    content: "Experience a smooth, traditional lather shave.",
    logo: "",
    img: "https://images.unsplash.com/photo-1596362601603-b74f6ef166e4?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    service: "Head Massage",
    content: "Unwind with a soothing head massage to relieve stress.",
    logo: "",
    img: "https://images.unsplash.com/photo-1693755807658-17ce5331aacb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Services() {
  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="max-w-xl mx-auto flex items-center justify-center py-10">
          <div className="relative text-center pt-16">
            <h4 className="text-xl text-primary font-medium tracking-tight mb-2">
              Our Services
            </h4>
            <h2 className="lg:text-4xl text-2xl tracking-tight font-semibold">
              Popular Hair Cutting and Salon
            </h2>
            <div className="absolute z-0 inset-0 lg:top-0 top-8">
              <h1 className="lg:text-9xl text-6xl text-dark/5 tracking-tighter font-medium">
                Services
              </h1>
            </div>
          </div>
        </div>
        <div>
          <TabGroup>
            <TabList className="grid grid-cols-12 gap-6">
              {services.map(({ service }) => (
                <Tab
                  key={service}
                  className="lg:col-span-2 col-span-6 flex flex-col items-center justify-center gap-y-4 px-8 py-12 drop-shadow-sm bg-white text-dark focus:outline-none data-[selected]:bg-primary data-[selected]:text-white data-[hover]:bg-primary data-[hover]:text-white transition duration-300 ease-in-out group"
                >
                  <ScissorsLineDashedIcon
                    className="stroke-current text-primary group-data-[hover]:text-white group-data-[selected]:text-white transition-colors duration-300 ease-in-out"
                    size={52}
                  />
                  <h2 className="font-medium tracking-tight text-lg">
                    {service}
                  </h2>
                </Tab>
              ))}
            </TabList>
            <TabPanels className="py-10">
              {services.map(({ content, img }) => (
                <TabPanel key={content} className="grid lg:grid-cols-12 gap-12">
                  <div className="col-span-6 w-full">
                    <Image
                      src={img}
                      width={500}
                      height={500}
                      alt={content}
                      className="w-full h-full max-h-96 object-cover object-center"
                    />
                  </div>
                  <div className="col-span-6 space-y-6">
                    <h2 className="max-w-lg lg:text-4xl text-2xl font-semibold tracking-tight">
                      {content}
                    </h2>
                    <p className="text-lg">
                      Phasellus vitae purus ac urna consequat facilisis a vel
                      leo. Maecenas hendrerit lacinia mollis. Fusce in leo
                      lectus. Phasellus leo mi, pellentesque nec risus
                      malesuada, volutpat porta ligula.
                    </p>
                    <ul className="space-y-2 text-lg pb-2">
                      <li className="flex items-center gap-3">
                        <div className="bg-primary/30 p-1 rounded-full">
                          <CheckIcon
                            className="stroke-primary"
                            size={16}
                            strokeWidth={3}
                          />
                        </div>
                        Easy to use salon special offer navigation
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="bg-primary/30 p-1 rounded-full">
                          <CheckIcon
                            className="stroke-primary"
                            size={16}
                            strokeWidth={3}
                          />
                        </div>
                        We care about our customers satisfaction
                      </li>
                    </ul>
                    <button className="flex items-center gap-2 text-lg bg-primary text-white font-medium tracking-tight px-8 py-4">
                      Booking Appointment <ChevronsRightIcon />
                    </button>
                  </div>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </section>
    </>
  );
}
