import PageContent from "../global/PageContent";
import Navbar from "../global/Navbar";
import SandboxContainer from "./SandboxContainer";

export default function Home() {
  return (
    <div className="flex h-screen bg-green-950 overflow-hidden">
      <Navbar />
      <div className="flex-1 overflow-y-auto">
        <PageContent title="Sandbox">
          <SandboxContainer />
        </PageContent>
      </div>
    </div>
  );
}
