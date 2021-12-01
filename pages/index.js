import Head from "next/head";
import Header from "./../components/Header";
import Banner from "./../components/Banner";
import SmallCard from "./../components/SmallCard";
import MediumCard from "./../components/MediumCard";
import LargeCard from "./../components/LargeCard";
import Footer from "./../components/Footer";

export default function Home({ exploreData, liveAnywhereData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />

      {/* banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-bold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ location, img, distance }) => (
              <SmallCard
                key={location}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h2 className="text-4xl font-bold py-6">Live Anywhere</h2>
          <div className="flex overflow-scroll space-x-4 scrollbar-hide p-3 -ml-3">
            {liveAnywhereData?.map(({ title, img }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <section className="py-6">
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlist curated by Airbnb"
            buttonText="Get inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const liveAnywhereData = await fetch("https://links.papareact.com/zp1").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
      liveAnywhereData,
    },
  };
}
