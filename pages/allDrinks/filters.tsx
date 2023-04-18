import { FC, SetStateAction } from "react";

interface SearchProps {
  searchInput: string;
  handleChange(e: any): void;
  showOrigins: boolean;
  setShowOrigins(value: SetStateAction<boolean>): void;
  showTypes: boolean;
  setShowTypes(value: SetStateAction<boolean>): void;
  showPrice: boolean;
  setShowPrice(value: SetStateAction<boolean>): void;
  showAbv: boolean;
  setShowAbv(value: SetStateAction<boolean>): void;
}

export const SearchBarFilters: FC<SearchProps> = ({
  searchInput,
  handleChange,
  showOrigins,
  setShowOrigins,
  showTypes,
  setShowTypes,
  showPrice,
  setShowPrice,
  showAbv,
  setShowAbv
}: SearchProps) => {
  return (
    <div className="grid grid-cols-6 gap-5">
      <div className="col-span-5">
        <form>
          <input
            key="search-bar"
            id="default-search"
            type="text"
            placeholder="Search By Name"
            onChange={handleChange}
            value={searchInput}
            className="hover:ring-4 hover:ring-slate-500 focus:ring-4 focus:ring-blue-500 rounded-md p-3 pl-7 w-full"
          />
        </form>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn w-full">
          Filters
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2"
        >
          <li>
            <button onClick={() => setShowOrigins(!showOrigins)}>Origin</button>
          </li>
          <li>
            <button onClick={() => setShowTypes(!showTypes)}>Types</button>
          </li>
          <li>
            <button onClick={() => setShowPrice(!showPrice)}>Price</button>
          </li>
          <li>
            <button onClick={() => setShowAbv(!showAbv)}>Abv</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

interface PriceAbvProps {
  handleChangeFilterInput(e: any): void;
}

export const Price: FC<PriceAbvProps> = ({
  handleChangeFilterInput,
}: PriceAbvProps) => {
  return (
    <div className="grid grid-cols-7 gap-2 pt-5">
      <div className="col-start-2 col-span-2">
        <div className="p-2 border-2 rounded-lg border-black bg-gray-800 col-span-1">
          <div className="grid grid-cols-2">
            <label htmlFor="minP" className="col-span-1 text-center">
              Min Price =
            </label>
            <input
              type="number"
              name="minP"
              min="0"
              max="1000"
              placeholder="0"
              id="minP"
              className="col-span-1"
              onChange={handleChangeFilterInput}
            />
          </div>
        </div>
      </div>
      <div className="col-span-2 col-start-5">
        <div className="p-2 border-2 rounded-lg border-black bg-gray-800">
          <div className="grid grid-cols-2">
            <label htmlFor="maxP" className="col-span-1 text-center">
              Max Price =
            </label>
            <input
              type="number"
              name="maxP"
              min="0"
              max="1000"
              id="maxP"
              className="col-span-1"
              placeholder="1000"
              onChange={handleChangeFilterInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Abv: FC<PriceAbvProps> = ({
  handleChangeFilterInput,
}: PriceAbvProps) => {
  return (
    <div className="grid grid-cols-7 gap-2 pt-5">
      <div className="col-start-2 col-span-2">
        <div className="p-2 border-2 rounded-lg border-black bg-gray-800">
          <div className="grid grid-cols-2">
            <label htmlFor="minA" className="col-span-1 text-center">
              Min Abv =
            </label>
            <input
              type="number"
              name="minA"
              min="0"
              max="100"
              id="minA"
              placeholder="0"
              className="col-span-1"
              onChange={handleChangeFilterInput}
            />
          </div>
        </div>
      </div>
      <div className="col-span-2 col-start-5">
        <div className="p-2 border-2 rounded-lg border-black bg-gray-800 col-span-1">
          <div className="grid grid-cols-2">
            <label htmlFor="maxA" className="col-span-1 text-center">
              Max Abv =
            </label>
            <input
              type="number"
              name="maxA"
              min="0"
              max="100"
              id="maxA"
              placeholder="100"
              className="col-span-1"
              onChange={handleChangeFilterInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface OriginProps {
  bS(e: any): void;
  b1: boolean;
  b2: boolean;
  b3: boolean;
  b4: boolean;
  s1: string;
  s2: string;
  s3: string;
  s4: string;
  f1(value: SetStateAction<boolean>): void;
  f2(value: SetStateAction<boolean>): void;
  f3(value: SetStateAction<boolean>): void;
  f4(value: SetStateAction<boolean>): void;
}

export const OriginFilter: FC<OriginProps> = ({
  bS,
  b1,
  b2,
  b3,
  b4,
  s1,
  s2,
  s3,
  s4,
  f1,
  f2,
  f3,
  f4,
}: OriginProps) => {
  return (
    <div className="grid grid-cols-6 gap-2 pt-5">
      <input
        type="button"
        value={s1}
        className={bS(b1) + " col-start-2"}
        onClick={() => f1(!b1)}
      />
      <input
        type="button"
        value={s2}
        className={bS(b2) + ""}
        onClick={() => f2(!b2)}
      />
      <input
        type="button"
        value={s3}
        className={bS(b3) + ""}
        onClick={() => f3(!b3)}
      />
      <input
        type="button"
        value={s4}
        className={bS(b4) + ""}
        onClick={() => f4(!b4)}
      />
    </div>
  );
};

interface TypesProps {
  bS(e: any): void;
  b1: boolean;
  b2: boolean;
  b3: boolean;
  s1: string;
  s2: string;
  s3: string;
  f1(value: SetStateAction<boolean>): void;
  f2(value: SetStateAction<boolean>): void;
  f3(value: SetStateAction<boolean>): void;
}

export const TypesFilter: FC<TypesProps> = ({
  bS,
  b1,
  b2,
  b3,
  s1,
  s2,
  s3,
  f1,
  f2,
  f3,
}: TypesProps) => {
  return (
    <div className="grid grid-cols-5 gap-2 pt-5">
      <input
        type="button"
        value={s1}
        className={bS(b1) + " col-start-2"}
        onClick={() => f1(!b1)}
      />
      <input
        type="button"
        value={s2}
        className={bS(b2) + ""}
        onClick={() => f2(!b2)}
      />
      <input
        type="button"
        value={s3}
        className={bS(b3) + ""}
        onClick={() => f3(!b3)}
      />
    </div>
  );
};
