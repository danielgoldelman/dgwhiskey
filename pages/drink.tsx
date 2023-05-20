import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { ReviewedDrink, Look, Taste, Linger } from "../components/interfaces";
import GimmeDrinks from "../public/jsons/hold.json";

import { defaultDrink } from "../components/statics";

import Header from "@/components/shared/head";
import Navbar from "@/components/shared/navbar";
import DrinkMain from "@/components/drink/singleDrink";

export default function DrinkPage() {
  const [singleDrink, setSingleDrink] = useState<ReviewedDrink>();
  const [overview, setOverview] = useState<string>("");
  const [look, setLook] = useState<Look>();
  const [taste, setTaste] = useState<Taste>();
  const [linger, setLinger] = useState<Linger>();

  const selectedDrink = async (name: string) => {
    var drink = defaultDrink;
    for (var i = 0; i < GimmeDrinks.length; i++) {
      if (
        GimmeDrinks[i]["drink"]["name"].toLowerCase().replaceAll(" ", "") ===
        name
      ) {
        drink = GimmeDrinks[i]["drink"] as ReviewedDrink;
        break;
      }
    }
    setSingleDrink(drink);
    setOverview(drink.fullTasting.overview);
    setLook(drink.fullTasting.look);
    setTaste(drink.fullTasting.taste);
    setLinger(drink.fullTasting.linger);
  };

  const reqIDnull = useSearchParams().get("name");

  useEffect(() => {
    reqIDnull ? selectedDrink(reqIDnull) : selectedDrink("");
  }, [reqIDnull]);

  return (
    <>
      <Header />
      <div className="text-white flex flex-col h-screen">
        <Navbar />
        <main className="h-full bg-gradient-to-b from-black to-orange-400 bg-auto justify-center flex overflow-y-auto relative">
          {singleDrink && overview && look && taste && linger ? (
            <DrinkMain
              singleDrink={singleDrink}
              overview={overview}
              look={look}
              taste={taste}
              linger={linger}
            />
          ) : (
            <></>
          )}
        </main>
      </div>
    </>
  );
}
