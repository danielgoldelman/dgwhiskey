import Header from "@/components/shared/head";
import Navbar from "@/components/shared/navbar";
import AllDrinks from "../components/mainPage/allDrinks";

export default function Home() {
  return (
    <>
      <Header />
      <div className="text-white flex flex-col h-screen">
        <Navbar />
        <main className="h-full bg-gradient-to-b from-black to-orange-400 bg-auto justify-center flex overflow-y-auto relative">
          <AllDrinks />
        </main>
      </div>
    </>
  );
}
