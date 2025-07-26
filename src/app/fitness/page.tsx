import Navbar from "../global/Navbar";
import PageContent from "../global/PageContent";

export default function Home() {
  return (
    <div className="flex h-screen bg-green-950">
      <Navbar />
      <PageContent title="Fitness" />
    </div>
  );
}
