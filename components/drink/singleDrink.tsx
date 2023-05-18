import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { ReviewedDrink, Look, Taste, Linger } from "@/public/static/interfaces";
import GimmeDrinks from "@/public/static/hold.json";
import { defaultDrink } from "@/components/statics";

export default function DrinkMain() {
  const [singleDrink, setSingleDrink] = useState<ReviewedDrink>();
  const [overview, setOverview] = useState<string>("");
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
    setOverview(drink.fullTasting.overview);
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
      {singleDrink && overview && look && taste && linger ? (
        <div className="grid grid-cols-11 py-8 sm:py-14">
          <div className="col-span-9 col-start-2 border border-white bg-black py-5 px-5 sm:px-10">
            <div className="text-4xl sm:text-6xl lg:text-8xl pb-5 sm:pb-10 text-center">
              {singleDrink.name}
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-4 place-items-center">
              <div className="col-span-1 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
                <div className="inline-flex gap-3 pb-4 sm:pb-6 md:pb-8 lg:pb-14 xl:pb-16 2xl:pb-20">
                  <div className="underline lg:decoration-2 underline-offset-2 lg:underline-offset-4 xl:pr-2">
                    Distillery:
                  </div>
                  <div className="">{singleDrink.maker}</div>
                </div>
                <br />
                <div className="inline-flex gap-3 pb-4 sm:pb-6 md:pb-8 lg:pb-14 xl:pb-16 2xl:pb-20">
                  <div className="underline lg:decoration-2 underline-offset-2 lg:underline-offset-4 xl:pr-2">
                    Owned By:
                  </div>
                  <div className="">{singleDrink.ownedBy}</div>
                </div>
                <br />
                <div className="inline-flex gap-3 pb-4 sm:pb-6 md:pb-8 lg:pb-14 xl:pb-16 2xl:pb-20">
                  <div className="underline lg:decoration-2 underline-offset-2 lg:underline-offset-4 xl:pr-2">
                    Type:
                  </div>
                  <div className="">{singleDrink.type}</div>
                </div>
                <br />
                <div className="flex">
                  <div className="inline-flex gap-3 pb-6 sm:pb-0">
                    <div className="underline lg:decoration-2 underline-offset-2 lg:underline-offset-4 xl:pr-2">
                      ABV:
                    </div>
                    <div className="">{singleDrink.abv.toString() + "%"}</div>
                  </div>
                  <div className="inline-flex gap-3 pl-5">
                    <div className="underline lg:decoration-2 underline-offset-2 lg:underline-offset-4 xl:pr-2">
                      Price:
                    </div>
                    <div className="">{"$" + singleDrink.price.toString()}</div>
                  </div>
                </div>
              </div>
              <img
                src={
                  "images/" +
                  singleDrink.name.toLocaleLowerCase().replaceAll(" ", "") +
                  ".jpg"
                }
                alt="Photo of whiskey"
                className="object-fill place-self-center w-full"
              />
            </div>
            <div className="py-4 lg:py-4 xl:py-6"></div>
            <div className="text-base sm:text-lg md:text-2xl 2xl:text-3xl pb-4 sm:text-justify">
              {overview}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
