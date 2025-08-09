import Navbar from "../../global/Navbar";
import PageContent from "../../global/PageContent";

export default function Home() {
  return (
    <div className="flex h-screen bg-green-950">
      <Navbar />

      <PageContent title="Nutrition">
        <p>
          This page is a view at my macro tracker. Using MacroFactor, I am able
          to export my data, which I can upload here. You can look at all the
          foods I eat, calories and macros over time, maintenance calories, and
          my bodyweight over time.
        </p>
      </PageContent>
    </div>
  );
}
