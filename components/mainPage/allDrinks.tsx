import { useState, useEffect } from "react";

import { Drink } from "@/public/static/interfaces";
import GimmeDrinks from "@/public/static/hold.json";

import SearchBarFiltersSort from "./filters/searchBarFiltersSort";
import { OriginFilter, OriginGroup } from "./filters/origin";
import { TypesFilter, TypesGroup} from "./filters/types";
import Abv from "./filters/abv";
import Price from "./filters/price";

import NameAbvCostLine from "./nameAbvCostLine";
import ShowAllDrinks from "./showAllDrinks";

import { origins, types } from "../statics";

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
  const [minA, setMinA] = useState<number>(0);
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

  // verify that all drinks shown to user are valid based on origin buttons choices
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

  // verify that all drinks shown to user are valid based on types buttons choices
  if (!bourbonB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.type !== types.bourbon;
    });
  }
  if (!ryeB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.type !== types.rye;
    });
  }
  if (!tennesseeB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.type !== types.tennessee;
    });
  }
  if (!singlePotB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.type !== types.singlePot;
    });
  }
  if (!singleMaltB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.type !== types.singleMalt;
    });
  }
  if (!blendedB) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.type !== types.blended;
    });
  }

  // verify that all drinks shown to user are valid based on price input choices
  if (minP) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.price >= minP;
    });
  }
  if (maxP) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.price < maxP;
    });
  }

  // verify that all drinks shown to user are valid based on abv input choices
  if (minA) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.price >= minA;
    });
  }
  if (maxA) {
    showDrinks = showDrinks.filter((d) => {
      return d.drink.price < maxA;
    });
  }

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
    [bourbonB, types.bourbon, setBourbonB],
    [ryeB, types.rye, setRyeB],
    [tennesseeB, types.tennessee, setTennesseeB], 
    [singlePotB, types.singlePot, setSinglePotB],
    [singleMaltB, types.singleMalt, setSingleMaltB],
    [blendedB, types.blended, setBlendedB]
  ]
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
    </div>
  );
}
