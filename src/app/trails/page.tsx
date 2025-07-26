import PageTitle from "../global/PageContent";
import Navbar from "../global/Navbar";

export default function Home() {
  return (
    <div className="flex h-screen bg-green-950">
      <Navbar />
      <PageTitle title="Trails" />
    </div>
  );
}
