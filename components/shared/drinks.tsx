import Link from "next/link";
import { ReviewedDrink, NotReviewedDrink } from "../interfaces";

export function ReviewedDrinkRet(drink: ReviewedDrink) {
  return (
    <div className="collapse rounded-2xl text-l sm:text-xl md:text-2xl xl:text-3xl bg-[#0d1117] my-5">
      <input type="checkbox" />
      <div className="flex p-3 collapse-title">
        <div className="w-4/6 pl-5">{drink.name}</div>
        <div className="w-1/6 text-center">{drink.abv.toString() + "%"}</div>
        <div className="w-1/6 text-center">{"$" + drink.price.toString()}</div>
      </div>
      <div className="collapse-content grid grid-cols-6 mx-5 sm:px-2 gap-x-3 sm:gap-x-8 gap-y-3 text-s sm:text-m md:text-xl lg:text-2xl text-center">
        <div className="rounded-2xl bg-green-500 col-span-3 lg:col-span-2 lg:col-start-2 px-2">
          {drink.origin}
        </div>
        <Link
          className="col-span-3 lg:col-span-2"
          href={{
            pathname: "./type",
            query: {
              type: drink.type,
            },
          }}
        >
          <div className="rounded-2xl bg-[#3c46fb] col-span-3 lg:col-span-2 px-2">
            {drink.type}
          </div>
        </Link>
        <div className="rounded-2xl bg-[#923cfb] col-span-3 lg:col-span-2 lg:col-start-2 px-2">
          {drink.maker}
        </div>
        <div className="rounded-2xl bg-[#923cfb] col-span-3 lg:col-span-2 px-2">
          {drink.ownedBy}
        </div>
        <Link
          className="col-span-full lg:col-start-2 lg:col-span-4"
          href={{
            pathname: "./drink",
            query: {
              name: drink.name.toLowerCase().replaceAll(" ", ""),
            },
          }}
        >
          <div className="rounded-2xl text-s sm:text-m md:text-xl lg:text-2xl bg-gray-500 text-center">
            Full Review
          </div>
        </Link>
      </div>
    </div>
  );
}

export function NotReviewedDrinkRet(drink: NotReviewedDrink) {
  return (
    <div className="collapse rounded-2xl text-m sm:text-xl md:text-2xl xl:text-3xl bg-[#0d1117] my-5">
      <input type="checkbox" />
      <div className="flex p-3 collapse-title">
        <div className="w-4/6 pl-5">{drink.name + "*"}</div>
        <div className="w-1/6 text-center">{drink.abv.toString() + "%"}</div>
        <div className="w-1/6 text-center">{"$" + drink.price.toString()}</div>
      </div>
      <div className="collapse-content grid grid-cols-6 mx-5 sm:px-2 gap-x-3 sm:gap-x-8 gap-y-3 text-s sm:text-m md:text-xl lg:text-2xl text-center">
        <div className="rounded-2xl bg-green-500 col-span-3 lg:col-span-2 lg:col-start-2 px-2">
          {drink.origin}
        </div>
        <Link
          className="col-span-3 lg:col-span-2"
          href={{
            pathname: "./type",
            query: {
              type: drink.type,
            },
          }}
        >
          <div className="rounded-2xl bg-[#3c46fb] col-span-3 lg:col-span-2 px-2">
            {drink.type}
          </div>
        </Link>
        <div className="rounded-2xl bg-[#923cfb] col-span-3 lg:col-span-2 lg:col-start-2 px-2">
          {drink.maker}
        </div>
        <div className="rounded-2xl bg-[#923cfb] col-span-3 lg:col-span-2 px-2">
          {drink.ownedBy}
        </div>
      </div>
    </div>
  );
}