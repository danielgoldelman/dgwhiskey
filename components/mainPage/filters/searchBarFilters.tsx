import { FC, SetStateAction } from "react";

interface SearchProps {
  searchInput: string;
  handleSearchChange(e: any): void;
  showOrigins: boolean;
  setShowOrigins(value: SetStateAction<boolean>): void;
  showTypes: boolean;
  setShowTypes(value: SetStateAction<boolean>): void;
  showPrice: boolean;
  setShowPrice(value: SetStateAction<boolean>): void;
  showAbv: boolean;
  setShowAbv(value: SetStateAction<boolean>): void;
}

/**
 * SearchBarFilters: Search bar and filters button / dropdown line for the main page
 * @param searchInput search bar input
 * @param handleSearchChange handle changing search bar input
 * @param showOrigins show origins boolean (useState 1/2)
 * @param setShowOrigins set show origins boolean (useState 2/2)
 * @param showTypes show types boolean (useState 1/2)
 * @param setShowTypes set show types boolean (useState 2/2)
 * @param setPrice show price boolean (useState 1/2)
 * @param setShowPrice set show types boolean (useState 2/2)
 * @param showAbv show abv boolean (useState 1/2)
 * @param setShowAbv set show abv boolean (useState 2/2)
 * @returns tsx component
 */
const SearchBarFilters: FC<SearchProps> = ({
  searchInput,
  handleSearchChange,
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
            onChange={handleSearchChange}
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
