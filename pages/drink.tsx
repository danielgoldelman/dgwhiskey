import Head from "next/head";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ReviewedDrink, Look, Taste, Linger } from "./static/interfaces";
import GimmeDrinks from "./static/hold.json";
import { defaultDrink } from "./allDrinks/statics";

export default function SingleDrink() {
  const [singleDrink, setSingleDrink] = useState<ReviewedDrink>();
  const [look, setLook] = useState<Look>();
  const [taste, setTaste] = useState<Taste>();
  const [linger, setLinger] = useState<Linger>();

  const reqID = useSearchParams().get("id");

  const selectedDrink = async (id: string) => {
    var drink = defaultDrink;
    for (var i = 0; i < GimmeDrinks.length; i++) {
      if (GimmeDrinks[i]["drink"]["id"] === id) {
        drink = GimmeDrinks[i]["drink"] as ReviewedDrink;
        break;
      }
    }
    setSingleDrink(drink);
    setLook(drink.fullTasting.look);
    setTaste(drink.fullTasting.taste);
    setLinger(drink.fullTasting.linger);
  };

  useEffect(() => {
    if (reqID === null) {
      const dNum = localStorage.getItem("drinkNumber");
      if (dNum) {
        selectedDrink(dNum);
      } else {
      }
    } else if (typeof reqID === "string") {
      selectedDrink(reqID);
      localStorage.setItem("drinkNumber", reqID);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Whiskey</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="sticky z-50 top-0 inset-x-0 flex flex-wrap w-full border-b border-gray-200 shadow-lg py-5 bg-[#0d1117]">
        <div className="relative left-[3%] text-3xl">{"DG \xa0 Whisk(e)y"}</div>
      </header>
      <main>
        {singleDrink && look && taste && linger ? (
          <div className="grid grid-cols-11 py-14">
            <div
              className="col-span-9 col-start-2 border border-white"
              key={singleDrink.id}
            >
              <div className="text-8xl pb-10" key={singleDrink.name}>
                {singleDrink.name}
              </div>
              <div className="text-5xl pb-10" key={singleDrink.type}>
                {"Type: " + singleDrink.type}
              </div>
              <div className="text-5xl pb-10" key={singleDrink.maker}>
                {"Distillery: " + singleDrink.maker}
              </div>
              <div className="flex">
                <div className="text-3xl" key={singleDrink.abv}>
                  {"ABV: " + singleDrink.abv.toString() + "%"}
                </div>
                <div className="px-5"></div>
                <div className="text-3xl" key={singleDrink.price}>
                  {"Price: $" + singleDrink.price.toString()}
                </div>
              </div>
              <div className="py-8"></div>
              <div>
                <div className="text-3xl" key={look.bottomColor}>
                  {"Bottom Color: " + look.bottomColor}
                </div>
                <div className="text-3xl" key={look.topColor}>
                  {"Top Color: " + look.topColor}
                </div>
                <div className="text-3xl" key={look.extraColors[0]}>
                  {"Extra Colors: " + look.extraColors}
                </div>
              </div>
              <div className="py-8"></div>
              <div>
                <div className="text-3xl" key={taste.shapeT[0]}>
                  {"ShapeT: " + taste.shapeT}
                </div>
                <div className="text-3xl" key={taste.bitternessT}>
                  {"Bitterness: " + taste.bitternessT}
                </div>
                <div className="text-3xl" key={taste.tasteT}>
                  {"TasteT: " + taste.tasteT}
                </div>
                <div className="text-3xl" key={taste.tastingNotesT}>
                  {"TastingNotesT: " + taste.tastingNotesT}
                </div>
              </div>
              <div className="py-8"></div>
              <div>
                <div className="text-3xl" key={linger.shapeL[0]}>
                  {"ShapeL: " + linger.shapeL}
                </div>
                <div className="text-3xl" key={linger.tasteL}>
                  {"TasteL: " + linger.tasteL}
                </div>
                <div className="text-3xl" key={linger.tastingNotesL}>
                  {"TastingNotesL: " + linger.tastingNotesL}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </main>
    </>
  );
}