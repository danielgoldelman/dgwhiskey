import { useState, useEffect } from "react";
import { Drink } from "../static/interfaces";
import GimmeDrinks from "../static/hold.json";
import ShowAllDrinks from "./showAllDrinks";

import OriginFilter from "./filters/origin";
import TypesFilter from "./filters/types";
import Abv from "./filters/abv";
import Price from "./filters/price";
import SearchBarFilters from "./filters/searchBarFilters";

import { origins, types } from "./statics";
import NameAbvCostLine from "./nameAbvCostLine";

export default function AllDrinks() {
  const [allDrinks, setAllDrinks] = useState<Drink[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const [showOrigins, setShowOrigins] = useState<boolean>(false);
  const [showTypes, setShowTypes] = useState<boolean>(false);
  const [showPrice, setShowPrice] = useState<boolean>(false);
  const [showAbv, setShowAbv] = useState<boolean>(false);

  const [americanB, setAmericanB] = useState<boolean>(true);
  const [scottishB, setScottishB] = useState<boolean>(true);
  const [irishB, setIrishB] = useState<boolean>(true);
  const [canadianB, setCanadianB] = useState<boolean>(true);
  const [japaneseB, setJapaneseB] = useState<boolean>(true);
  const [englishB, setEnglishB] = useState<boolean>(true);
  const [welshB, setWelshB] = useState<boolean>(true);
  const [indianB, setIndianB] = useState<boolean>(true);

  const [bourbonB, setBourbonB] = useState<boolean>(true);
  const [ryeB, setRyeB] = useState<boolean>(true);
  const [tennesseeB, setTennesseeB] = useState<boolean>(true);
  const [singlePotB, setSinglePotB] = useState<boolean>(true);
  const [singleMaltB, setSingleMaltB] = useState<boolean>(true);
  const [blendedB, setBlendedB] = useState<boolean>(true);

  const [minP, setMinP] = useState<number>(0);
  const [maxP, setMaxP] = useState<number>(1000);
  const [minA, setMinA] = useState<number>(0);
  const [maxA, setMaxA] = useState<number>(100);

  const getDrinks = () => {
    var retDrinks = [];
    for (var i = 0; i < GimmeDrinks.length; i++) {
      let newDrink = GimmeDrinks[i] as Drink;
      retDrinks.push(newDrink);
    }
    setAllDrinks(retDrinks);
  };

  useEffect(() => {
    getDrinks();
  }, []);

  const handleChangeFilterInput = (e: any) => {
    const val = e.target.value;
    switch (e.target.name) {
      case "minP":
        setMinP(val);
        break;
      case "maxP":
        setMaxP(val);
        break;
      case "minA":
        setMinA(val);
        break;
      case "maxA":
        setMaxA(val);
        break;
    }
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  var showDrinks = allDrinks;
  if (searchInput.length > 0 && allDrinks) {
    showDrinks = allDrinks.filter((d) => {
      return d.drink.name.toLowerCase().includes(searchInput.toLowerCase());
    });
  }

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

  const originButtons = (b: boolean): string => {
    if (!b) {
      return "p-2 border-2 rounded-lg border-black bg-gray-800 col-span-1 cursor-pointer text-center";
    }
    return "p-2 border-2 rounded-lg border-black bg-green-500 col-span-1 cursor-pointer text-center";
  };

  const typeButtons = (b: boolean): string => {
    if (!b) {
      return "p-2 border-2 rounded-lg border-black bg-gray-800 col-span-1 cursor-pointer text-center";
    }
    return "p-2 border-2 rounded-lg border-black bg-[#3c46fb] col-span-1 cursor-pointer text-center";
  };

  return (
    <div className="w-3/4">
      <div className="pt-5"></div>
      <SearchBarFilters
        searchInput={searchInput}
        handleChange={handleChange}
        showOrigins={showOrigins}
        setShowOrigins={setShowOrigins}
        showTypes={showTypes}
        setShowTypes={setShowTypes}
        showPrice={showPrice}
        setShowPrice={setShowPrice}
        showAbv={showAbv}
        setShowAbv={setShowAbv}
      />
      {showOrigins ? (
        <>
          <OriginFilter
            bS={originButtons}
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
            bS={originButtons}
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
            bS={typeButtons}
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
            bS={typeButtons}
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
          <Price handleChangeFilterInput={handleChangeFilterInput} />
        </>
      ) : (
        <></>
      )}
      {showAbv ? (
        <>
          <Abv handleChangeFilterInput={handleChangeFilterInput} />
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
