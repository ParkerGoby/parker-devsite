import Navbar from "../../global/Navbar";
import PageContent from "../../global/PageContent";

export default function Home() {
  return (
    <div className="flex h-screen bg-green-950">
      <Navbar />

      <PageContent title="Lifts">
        <p>
          This page is dedicated to my lifts. I started off with a Push Pull
          Legs Rest 4 day split, but I have since adjusted it to be something of
          my own. You can see what days I lift, the set of lifts for each day,
          and how my weights/reps have changed over time.
        </p>
      </PageContent>
    </div>
  );
}
