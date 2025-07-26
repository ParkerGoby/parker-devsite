import Navbar from "./global/Navbar";
import AboutMe from "./AboutMe";
import HomeCard from "./HomeCard";

export default function Home() {
  return (
    <div className="flex h-screen bg-green-950">
      <Navbar />
      <div className="flex flex-col min-h-screen w-full">
        <AboutMe />
        <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center min-w-xl">
          <HomeCard
            href="/trails"
            title="Trails"
            imageSrc="/ted-bryan-yu-5mezpWin6T8-unsplash(1).jpg"
          />
          <HomeCard
            href="/lifts"
            title="Lifts and Nutrition"
            imageSrc="/ted-bryan-yu-5mezpWin6T8-unsplash(1).jpg"
          />
          <HomeCard
            href="/blog"
            title="Blog"
            imageSrc="/ted-bryan-yu-5mezpWin6T8-unsplash(1).jpg"
          />
          <HomeCard
            href="/sandbox"
            title="Component Sandbox"
            imageSrc="/ted-bryan-yu-5mezpWin6T8-unsplash(1).jpg"
          />
        </section>
      </div>
    </div>
  );
}
