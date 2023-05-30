import { useState, useEffect } from "react";

import { Drink } from "@/components/interfaces";
import GimmeDrinks from "@/public/jsons/hold.json";

import SearchBarFiltersSort from "./filters/searchBarFiltersSort";
import { OriginFilter, OriginGroup } from "./filters/origin";
import { TypesFilter, TypesGroup } from "./filters/types";
import Abv from "./filters/abv";
import Price from "./filters/price";

import NameAbvCostLine from "./nameAbvCostLine";
import ShowAllDrinks from "./showAllDrinks";

import { origins, types } from "../statics";

/**
 * This is a React component that displays a list of drinks and allows the user to filter and sort them
 * based on various criteria.
 */
export default function AllDrinks() {
  // All drinks in database
  const [allDrinks, setAllDrinks] = useState<Drink[]>([]);

  // Input for searching by name
  const [searchInput, setSearchInput] = useState<string>("");

  // booleans for showing/not showing the different filters
  const [showOrigins, setShowOrigins] = useState<boolean>(false);
  const [showTypes, setShowTypes] = useState<boolean>(false);
  const [showPrice, setShowPrice] = useState<boolean>(false);
  const [showAbv, setShowAbv] = useState<boolean>(false);

  // booleans for origins
  const [americanB, setAmericanB] = useState<boolean>(true);
  const [scottishB, setScottishB] = useState<boolean>(true);
  const [irishB, setIrishB] = useState<boolean>(true);
  const [canadianB, setCanadianB] = useState<boolean>(true);
  const [japaneseB, setJapaneseB] = useState<boolean>(true);
  const [englishB, setEnglishB] = useState<boolean>(true);
  const [welshB, setWelshB] = useState<boolean>(true);
  const [indianB, setIndianB] = useState<boolean>(true);

  // booleans for types
  const [bourbonB, setBourbonB] = useState<boolean>(true);
  const [ryeB, setRyeB] = useState<boolean>(true);
  const [tennesseeB, setTennesseeB] = useState<boolean>(true);
  const [singlePotB, setSinglePotB] = useState<boolean>(true);
  const [singleMaltB, setSingleMaltB] = useState<boolean>(true);
  const [blendedB, setBlendedB] = useState<boolean>(true);

  // numbers for min/max price, min/max abv
  const [minP, setMinP] = useState<number>(0);
  const [maxP, setMaxP] = useState<number>(200);
  const [minA, setMinA] = useState<number>(30);
  const [maxA, setMaxA] = useState<number>(60);

  // string for sort by
  const [sortBy, setSortBy] = useState<string>("");

  /**
   * getDrinks: get all drinks from json file and format as type Drink
   */
  function getDrinks() {
    var retDrinks = [];
    for (var i = 0; i < GimmeDrinks.length; i++) {
      let newDrink = GimmeDrinks[i] as Drink;
      retDrinks.push(newDrink);
    }
    setAllDrinks(retDrinks);
  }

  // useEffect: on page load, get all drinks
  useEffect(() => {
    getDrinks();
  }, []);

  /**
   * This function sorts an array of drinks based on a user's choice of sorting criteria.
   * @param {Drink[]} showDrinks - an array of Drink objects that we want to sort based on the chosen
   * criteria.
   * @param {string} choice - The parameter "choice" is a string that determines how the "showDrinks"
   * array should be sorted. It can take on the values "name", "pricelh", "pricehl", "abvlh", or
   * "abvhl". Depending on the value of "choice",
   * @returns The function `sortByFun` returns an array of `Drink` objects sorted based on the `choice`
   * parameter. If `choice` is "name", the array is sorted by drink name in ascending order. If
   * `choice` is "pricelh", the array is sorted by drink price in ascending order. If `choice` is
   * "pricehl", the array is sorted by drink price
   */
  function sortByFun(showDrinks: Drink[], choice: string): Drink[] {
    switch (choice) {
      case "name":
        return showDrinks.sort((a, b) =>
          a.drink.name < b.drink.name ? -1 : 1
        );
      case "pricelh":
        return showDrinks.sort((a, b) =>
          a.drink.price < b.drink.price ? -1 : 1
        );
      case "pricehl":
        return showDrinks.sort((a, b) =>
          a.drink.price > b.drink.price ? -1 : 1
        );
      case "abvlh":
        return showDrinks.sort((a, b) => (a.drink.abv < b.drink.abv ? -1 : 1));
      case "abvhl":
        return showDrinks.sort((a, b) => (a.drink.abv > b.drink.abv ? -1 : 1));
      default:
        return showDrinks;
    }
  }

  // var to keep track of all drinks to be shown based on filters
  var showDrinks = sortByFun(allDrinks, sortBy);

  // verify that all drinks shown to user are valid based on search bar input (by name only)
  if (searchInput.length > 0 && allDrinks) {
    showDrinks = allDrinks.filter((d) => {
      return d.drink.name.toLowerCase().includes(searchInput.toLowerCase());
    });
  }

  /* This code block is filtering the drinks to be shown based on the user's selected origin
  preferences. Each if statement checks if the corresponding boolean variable (e.g. `americanB`) is
  false, indicating that the user does not want to see drinks from that origin. If the boolean is
  false, the `showDrinks` array is filtered to remove any drinks with that origin. This is done for
  all possible origin options. */
  if (!americanB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.origin !== origins.american;
    });
  }
  if (!scottishB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.origin !== origins.scottish;
    });
  }
  if (!irishB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.origin !== origins.irish;
    });
  }
  if (!canadianB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.origin !== origins.canadian;
    });
  }
  if (!japaneseB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.origin !== origins.japanese;
    });
  }
  if (!englishB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.origin !== origins.english;
    });
  }
  if (!welshB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.origin !== origins.welsh;
    });
  }
  if (!indianB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.origin !== origins.indian;
    });
  }

  /* This code block is filtering the drinks to be shown based on the user's selected type preferences.
  Each if statement checks if the corresponding boolean variable (e.g. `bourbonB`) is false,
  indicating that the user does not want to see drinks of that type. If the boolean is false, the
  `showDrinks` array is filtered to remove any drinks with that type. This is done for all possible
  type options. */
  if (!bourbonB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.type !== types.bourbon.str;
    });
  }
  if (!ryeB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.type !== types.rye.str;
    });
  }
  if (!tennesseeB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.type !== types.tennessee.str;
    });
  }
  if (!singlePotB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.type !== types.singlePot.str;
    });
  }
  if (!singleMaltB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.type !== types.singleMalt.str;
    });
  }
  if (!blendedB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.type !== types.blended.str;
    });
  }

  /* This code block is filtering the drinks to be shown based on the user's selected price range. The
  `showDrinks` array is filtered to remove any drinks with a price less than the minimum price
  (`minP`) and greater than or equal to the maximum price (`maxP`). This ensures that only drinks
  within the user's selected price range are displayed. */
  showDrinks = showDrinks.filter((d) => {
    return d.drink.price >= minP;
  });
  showDrinks = showDrinks.filter((d) => {
    return d.drink.price < maxP;
  });

  /* This code block is filtering the drinks to be shown based on the user's selected minimum and
  maximum ABV (alcohol by volume) values. The `showDrinks` array is filtered to remove any drinks
  with an ABV less than the minimum ABV (`minA`) and greater than or equal to the maximum ABV
  (`maxA`). This ensures that only drinks within the user's selected ABV range are displayed. */
  showDrinks = showDrinks.filter((d) => {
    return d.drink.abv >= minA;
  });
  showDrinks = showDrinks.filter((d) => {
    return d.drink.abv < maxA;
  });

  const originList = [
    [americanB, origins.american, setAmericanB],
    [scottishB, origins.scottish, setScottishB],
    [irishB, origins.irish, setIrishB],
    [canadianB, origins.canadian, setCanadianB],
    [japaneseB, origins.japanese, setJapaneseB],
    [englishB, origins.english, setEnglishB],
    [welshB, origins.welsh, setWelshB],
    [indianB, origins.indian, setIndianB],
  ];
  const originGroups = originList.map((element: any[]) => {
    return {
      bool: element[0],
      str: element[1],
      fun: element[2],
    } as OriginGroup;
  });

  const typesList = [
    [bourbonB, types.bourbon.str, setBourbonB],
    [ryeB, types.rye.str, setRyeB],
    [tennesseeB, types.tennessee.str, setTennesseeB],
    [singlePotB, types.singlePot.str, setSinglePotB],
    [singleMaltB, types.singleMalt.str, setSingleMaltB],
    [blendedB, types.blended.str, setBlendedB],
  ];
  const typesGroups = typesList.map((element: any[]) => {
    return {
      bool: element[0],
      str: element[1],
      fun: element[2],
    } as TypesGroup;
  });

  return (
    <div className="w-5/6 sm:w-3/4">
      <div className="pt-5"></div>
      <SearchBarFiltersSort
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        showOrigins={showOrigins}
        setShowOrigins={setShowOrigins}
        showTypes={showTypes}
        setShowTypes={setShowTypes}
        showPrice={showPrice}
        setShowPrice={setShowPrice}
        showAbv={showAbv}
        setShowAbv={setShowAbv}
        setSortBy={setSortBy}
      />
      {showOrigins ? (
        <>
          <OriginFilter origins={originGroups} />
        </>
      ) : (
        <></>
      )}
      {showTypes ? (
        <>
          <TypesFilter types={typesGroups} />
        </>
      ) : (
        <></>
      )}
      {showPrice ? (
        <>
          <Price minP={minP} maxP={maxP} setMinP={setMinP} setMaxP={setMaxP} />
        </>
      ) : (
        <></>
      )}
      {showAbv ? (
        <>
          <Abv minA={minA} maxA={maxA} setMinA={setMinA} setMaxA={setMaxA} />
        </>
      ) : (
        <></>
      )}
      <div className="pt-5"></div>
      <NameAbvCostLine />
      <ShowAllDrinks showDrinks={showDrinks} />
      <div className="pt-5"></div>
    </div>
  );
}
