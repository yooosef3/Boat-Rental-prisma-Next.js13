import About from "./_components/home/about/About";
import Articles from "./_components/home/articles/Articles";
import Banner from "./_components/home/banner/Banner";
import BoatsList from "./_components/home/BoatsList/BoatsList";
import Captains from "./_components/home/captains/Captains";
import ClientOnly from "./_components/ClientOnly";
import Contact from "./_components/home/contact/Contact";
import Holiday from "./_components/home/holiday/Holiday";
import Reviews from "./_components/home/reviews/Reviews";
import Services from "./_components/home/ourService/Services";

export default function Home() {
  return (
    <ClientOnly>
      <Banner />
      <BoatsList />
      <Services />
      <Holiday />
      <About />
      <Captains />
      <Reviews />
      <Contact />
      <Articles />
    </ClientOnly>
  );
}
