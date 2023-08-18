import Banner from "./components/banner/Banner";
import ClientOnly from "./components/ClientOnly";

export default function Home() {
  return (
    <ClientOnly>
        <Banner />
    </ClientOnly>
  );
}
