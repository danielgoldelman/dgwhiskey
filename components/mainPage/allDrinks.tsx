import { useState, useEffect } from "react";

import { Drink } from "@/public/static/interfaces";
import GimmeDrinks from "@/public/static/hold.json";

import SearchBarFiltersSort from "./filters/searchBarFiltersSort";
import OriginFilter from "./filters/origin";
import TypesFilter from "./filters/types";
import Abv from "./filters/abv";
import Price from "./filters/price";

import NameAbvCostLine from "./nameAbvCostLine";
import ShowAllDrinks from "./showAllDrinks";

import { origins, types } from "../statics";
import sortByFun from "./sortByFun";

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

  // string for sort by
  const [sortBy, setSortBy] = useState<string>("");

  // booleans for types
  const [bourbonB, setBourbonB] = useState<boolean>(true);
  const [ryeB, setRyeB] = useState<boolean>(true);
  const [tennesseeB, setTennesseeB] = useState<boolean>(true);
  const [singlePotB, setSinglePotB] = useState<boolean>(true);
  const [singleMaltB, setSingleMaltB] = useState<boolean>(true);
  const [blendedB, setBlendedB] = useState<boolean>(true);

  // numbers for min/max price, min/max abv
  const [minP, setMinP] = useState<number>(0);
  const [maxP, setMaxP] = useState<number>(1000);
  const [minA, setMinA] = useState<number>(0);
  const [maxA, setMaxA] = useState<number>(100);

  /**
   * getDrinks: get all drinks from json file and format as type Drink
   */
  const getDrinks = () => {
    var retDrinks = [];
    for (var i = 0; i < GimmeDrinks.length; i++) {
      let newDrink = GimmeDrinks[i] as Drink;
      retDrinks.push(newDrink);
    }
    setAllDrinks(retDrinks);
  };

  // useEffect: on page load, get all drinks
  useEffect(() => {
    getDrinks();
  }, []);

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

  return (
    <div className="w-3/4">
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
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {showOrigins ? (
        <>
          <OriginFilter
            b1={americanB}
            b2={scottishB}
            b3={irishB}
            b4={canadianB}
            s1={origins.american}
            s2={origins.scottish}
            s3={origins.irish}
            s4={origins.canadian}
            f1={setAmericanB}
            f2={setScottishB}
            f3={setIrishB}
            f4={setCanadianB}
          />
          <OriginFilter
            b1={japaneseB}
            b2={englishB}
            b3={welshB}
            b4={indianB}
            s1={origins.japanese}
            s2={origins.english}
            s3={origins.welsh}
            s4={origins.indian}
            f1={setJapaneseB}
            f2={setEnglishB}
            f3={setWelshB}
            f4={setIndianB}
          />
        </>
      ) : (
        <></>
      )}
      {showTypes ? (
        <>
          <TypesFilter
            b1={bourbonB}
            b2={ryeB}
            b3={tennesseeB}
            s1={types.bourbon}
            s2={types.rye}
            s3={types.tennessee}
            f1={setBourbonB}
            f2={setRyeB}
            f3={setTennesseeB}
          />
          <TypesFilter
            b1={singlePotB}
            b2={singleMaltB}
            b3={blendedB}
            s1={types.singlePot}
            s2={types.singleMalt}
            s3={types.blended}
            f1={setSinglePotB}
            f2={setSingleMaltB}
            f3={setBlendedB}
          />
        </>
      ) : (
        <></>
      )}
      {showPrice ? (
        <>
          <Price setMinP={setMinP} setMaxP={setMaxP} />
        </>
      ) : (
        <></>
      )}
      {showAbv ? (
        <>
          <Abv setMinA={setMinA} setMaxA={setMaxA} />
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
