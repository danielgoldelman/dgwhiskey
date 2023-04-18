import Link from "next/link";
import { Drink } from "../static/interfaces";
import { FC } from "react";

interface MultDrinks {
  showDrinks: Drink[];
}

export const ShowAllDrinks: FC<MultDrinks> = ({ showDrinks }: MultDrinks) => {
  return (
    <>
      {showDrinks.map(
        ({
          drink: {
            id,
            name,
            origin,
            maker,
            ownedBy,
            type,
            price,
            abv,
            reviewed,
          },
        }) => {
          return reviewed ? (
            <div className="collapse rounded-2xl text-2xl bg-[#0d1117] my-5">
              <input type="checkbox" />
              <div className="flex p-3 collapse-title">
                <div className="w-4/6 pl-5">{name}</div>
                <div className="w-1/6 text-center">{abv.toString() + "%"}</div>
                <div className="w-1/6 text-center">
                  {"$" + price.toString()}
                </div>
              </div>
              <div className="collapse-content grid grid-cols-6 mx-5 gap-2">
                <div className="rounded-2xl text-xl bg-green-500 col-span-1 text-center">
                  {origin}
                </div>
                <div className="rounded-2xl text-xl bg-[#3c46fb] col-span-1 text-center">
                  {type}
                </div>
                <div className="rounded-2xl text-xl bg-[#923cfb] col-span-2 text-center">
                  {maker}
                </div>
                <div className="rounded-2xl text-xl bg-[#923cfb] col-span-1 text-center">
                  {ownedBy}
                </div>
                <Link
                  className="col-start-6 col-span-1"
                  href={{
                    pathname: "./drink",
                    query: {
                      id: id.toString(),
                    },
                  }}
                >
                  <div className="rounded-2xl text-xl bg-gray-500 text-center">
                    Full Review
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            <div className="collapse rounded-2xl text-2xl bg-[#0d1117] my-5">
              <input type="checkbox" />
              <div className="flex p-3 collapse-title">
                <div className="w-4/6 pl-5">{name + " *"}</div>
                <div className="w-1/6 text-center">{abv.toString() + "%"}</div>
                <div className="w-1/6 text-center">
                  {"$" + price.toString()}
                </div>
              </div>
              <div className="collapse-content grid grid-cols-6 mx-5 gap-2">
                <div className="rounded-2xl text-xl bg-green-500 col-span-1 text-center">
                  {origin}
                </div>
                <div className="rounded-2xl text-xl bg-[#3c46fb] col-span-1 text-center">
                  {type}
                </div>
                <div className="rounded-2xl text-xl bg-[#923cfb] col-span-2 text-center">
                  {maker}
                </div>
                <div className="rounded-2xl text-xl bg-[#923cfb] col-span-1 text-center">
                  {ownedBy}
                </div>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

export default ShowAllDrinks;
