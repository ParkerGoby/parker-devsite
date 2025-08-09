import Navbar from "../global/Navbar";
import PageContent from "../global/PageContent";
import HomeCard from "../global/HomeCard";

export default function Home() {
  return (
    <div className="flex h-screen bg-green-950">
      <Navbar />

      <PageContent title="Fitness">
        <p>
          Fitness has been an interest of mine for several years. I was
          extremely inconistent with exercise, nutrition, and schedule until
          December 2024, when I started to figure out what works for me. I made
          this page for me to track my progress, to be able to build off of my
          data, and for other people to learn from what I've done.
        </p>
        <section className="mt-16 grid grid-cols-2 gap-80 place-items-center min-w-xl">
          <HomeCard
            href="/fitness/lifts"
            title="Lifts"
            imageSrc="/ted-bryan-yu-5mezpWin6T8-unsplash(1).jpg"
          />
          <HomeCard
            href="/fitness/nutrition"
            title="Nutrition"
            imageSrc="/ted-bryan-yu-5mezpWin6T8-unsplash(1).jpg"
          />
        </section>
      </PageContent>
    </div>
  );
}
