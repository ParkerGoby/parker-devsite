import PageContent from "../global/PageContent";
import Navbar from "../global/Navbar";
import BlogPage from "./BlogPage";

export default function Home() {
  return (
    <div className="flex h-screen bg-green-950">
      <Navbar />
      <PageContent title="Blog">
        <BlogPage />
      </PageContent>
    </div>
  );
}
