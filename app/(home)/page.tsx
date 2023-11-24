import About from "../../components/home/about/About";
import Articles from "../../components/home/articles/Articles";
import Banner from "../../components/home/banner/Banner";
import BoatsList from "../../components/home/BoatsList/BoatsList";
import Captains from "../../components/home/captains/Captains";
import Contact from "../../components/home/contact/Contact";
import Footer from "../../components/footer/Footer";
import Holiday from "../../components/home/holiday/Holiday";
import Reviews from "../../components/home/reviews/Reviews";
import Services from "../../components/home/ourService/Services";
import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";

export default async function Home() {
  const listings = await getListings();
  const currentUser = getCurrentUser();
  return (
    <>
      <Banner />
      <BoatsList boats={listings} currentUser={currentUser}/>
      <Services />
      <Holiday />
      <About />
      <Captains />
      <Reviews />
      <Contact />
      <Articles />
      <Footer />
    </>
  );
}
