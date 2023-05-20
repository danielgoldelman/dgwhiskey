import Header from "@/components/shared/head";
import Navbar from "@/components/shared/navbar";
import AboutContent from "@/components/about/aboutContent";

export default function About() {
  return (
    <>
      <Header />
      <div className="text-white flex flex-col h-screen">
        <Navbar />
        <main className="h-full bg-gradient-to-b from-black to-orange-400 bg-auto justify-center flex overflow-y-auto relative">
          <AboutContent />
        </main>
      </div>
    </>
  );
}
