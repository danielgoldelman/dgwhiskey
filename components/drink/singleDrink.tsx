import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { ReviewedDrink, Look, Taste, Linger } from "@/public/static/interfaces";
import GimmeDrinks from "@/public/static/hold.json";
import { defaultDrink } from "@/components/statics";

export default function DrinkMain() {
  const [singleDrink, setSingleDrink] = useState<ReviewedDrink>();
  const [look, setLook] = useState<Look>();
  const [taste, setTaste] = useState<Taste>();
  const [linger, setLinger] = useState<Linger>();

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

  const reqIDnull = useSearchParams().get("id");

  useEffect(() => {
    reqIDnull ? selectedDrink(reqIDnull) : selectedDrink("");
  }, [reqIDnull]);

  return (
    <>
      {singleDrink && look && taste && linger ? (
        <div className="grid grid-cols-11 py-14">
          <div className="col-span-9 col-start-2 border border-white bg-black p-5">
            <div className="text-8xl pb-10">{singleDrink.name}</div>
            <div className="text-5xl pb-10">
              {"Distillery: " + singleDrink.maker}
            </div>
            <div className="text-5xl pb-10">
              {"Owned By: " + singleDrink.ownedBy}
            </div>
            <div className="text-5xl pb-10">{"Type: " + singleDrink.type}</div>
            <div className="flex">
              <div className="text-3xl">
                {"ABV: " + singleDrink.abv.toString() + "%"}
              </div>
              <div className="px-5"></div>
              <div className="text-3xl">
                {"Price: $" + singleDrink.price.toString()}
              </div>
            </div>
            <div className="py-8"></div>
            <div>
              <div className="text-3xl">
                {"Bottom Color: " + look.bottomColor}
              </div>
              <div className="text-3xl">{"Top Color: " + look.topColor}</div>
              <div className="text-3xl">
                {"Extra Colors: " + look.extraColors}
              </div>
            </div>
            <div className="py-8"></div>
            <div>
              <div className="text-3xl">{"ShapeT: " + taste.shapeT}</div>
              <div className="text-3xl">
                {"Bitterness: " + taste.bitternessT}
              </div>
              <div className="text-3xl">{"TasteT: " + taste.tasteT}</div>
              <div className="text-3xl">
                {"TastingNotesT: " + taste.tastingNotesT}
              </div>
            </div>
            <div className="py-8"></div>
            <div>
              <div className="text-3xl">{"ShapeL: " + linger.shapeL}</div>
              <div className="text-3xl">{"TasteL: " + linger.tasteL}</div>
              <div className="text-3xl">
                {"TastingNotesL: " + linger.tastingNotesL}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
