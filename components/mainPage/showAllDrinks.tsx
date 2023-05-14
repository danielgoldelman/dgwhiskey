import Link from "next/link";
import { Drink } from "../../public/static/interfaces";
import { FC } from "react";

interface MultDrinks {
  showDrinks: Drink[];
}

/**
 * ShowAllDrinks: showing all drinks that fit with the current filters
 * @param showDrinks
 * @returns tsx component
 */
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
            <div className="collapse rounded-2xl text-l sm:text-xl md:text-2xl xl:text-3xl bg-[#0d1117] my-5">
              <input type="checkbox" />
              <div className="flex p-3 collapse-title">
                <div className="w-4/6 pl-5">{name}</div>
                <div className="w-1/6 text-center">{abv.toString() + "%"}</div>
                <div className="w-1/6 text-center">
                  {"$" + price.toString()}
                </div>
              </div>
              <div className="collapse-content grid grid-cols-6 mx-5 sm:px-2 gap-x-3 sm:gap-x-8 gap-y-3 text-s sm:text-m md:text-xl lg:text-2xl text-center">
                <div className="rounded-2xl bg-green-500 col-span-3 lg:col-span-2 lg:col-start-2 px-2">
                  {origin}
                </div>
                <div className="rounded-2xl bg-[#3c46fb] col-span-3 lg:col-span-2 px-2">
                  {type}
                </div>
                <div className="rounded-2xl bg-[#923cfb] col-span-3 lg:col-span-2 lg:col-start-2 px-2">
                  {maker}
                </div>
                <div className="rounded-2xl bg-[#923cfb] col-span-3 lg:col-span-2 px-2">
                  {ownedBy}
                </div>
                <Link
                  className="col-span-full lg:col-start-2 lg:col-span-4"
                  href={{
                    pathname: "./drink",
                    query: {
                      id: id.toString(),
                    },
                  }}
                >
                  <div className="rounded-2xl text-s sm:text-m md:text-xl lg:text-2xl bg-gray-500 text-center">
                    Full Review
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            <div className="collapse rounded-2xl text-m sm:text-xl md:text-2xl xl:text-3xl bg-[#0d1117] my-5 px-2">
              <input type="checkbox" />
              <div className="flex p-3 collapse-title">
                <div className="w-4/6 pl-5">{name + " *"}</div>
                <div className="w-1/6 text-center">{abv.toString() + "%"}</div>
                <div className="w-1/6 text-center">
                  {"$" + price.toString()}
                </div>
              </div>
              <div className="collapse-content grid grid-cols-6 mx-5 sm:px-2 gap-x-3 sm:gap-x-8 gap-y-3 text-s sm:text-m md:text-xl lg:text-2xl text-center">
                <div className="rounded-2xl bg-green-500 col-span-3 lg:col-span-2 lg:col-start-2 px-2">
                  {origin}
                </div>
                <div className="rounded-2xl bg-[#3c46fb] col-span-3 lg:col-span-2 px-2">
                  {type}
                </div>
                <div className="rounded-2xl bg-[#923cfb] col-span-3 lg:col-span-2 lg:col-start-2 px-2">
                  {maker}
                </div>
                <div className="rounded-2xl bg-[#923cfb] col-span-3 lg:col-span-2 px-2">
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
