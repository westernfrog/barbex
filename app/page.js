import About from "./_components/About";
import Appointment from "./_components/Appointment";
import Blogs from "./_components/Blogs";
import Contact from "./_components/Contact";
import Overview from "./_components/Overview";
import Products from "./_components/Products";
import Services from "./_components/Services";
import Testimonial from "./_components/Testimonial";

export default function Home(params) {
  return (
    <>
      <Overview />
      <About />
      <Services />
      <Appointment />
      <Products />
      <Contact />
      <Testimonial />
      <Blogs />
    </>
  );
}
