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

const SearchBarFilters: FC<SearchProps> = ({
  searchInput,
  handleChange,
  showOrigins,
  setShowOrigins,
  showTypes,
  setShowTypes,
  showPrice,
  setShowPrice,
  showAbv,
  setShowAbv,
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

export default SearchBarFilters;
