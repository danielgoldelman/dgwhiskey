import { FC, SetStateAction } from "react";

interface SearchProps {
  searchInput: string;
  setSearchInput(value: SetStateAction<string>): void;
  showOrigins: boolean;
  setShowOrigins(value: SetStateAction<boolean>): void;
  showTypes: boolean;
  setShowTypes(value: SetStateAction<boolean>): void;
  showPrice: boolean;
  setShowPrice(value: SetStateAction<boolean>): void;
  showAbv: boolean;
  setShowAbv(value: SetStateAction<boolean>): void;
  sortBy: string;
  setSortBy(value: SetStateAction<string>): void;
}

/**
 * SearchBarFiltersSort: Search bar and filters button / dropdown line for the main page
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
 * @param sortBy sort by string (useState 1/2)
 * @param setSortBy set sort by string (useState 2/2)
 * @returns tsx component
 */
const SearchBarFiltersSort: FC<SearchProps> = ({
  searchInput,
  setSearchInput,
  showOrigins,
  setShowOrigins,
  showTypes,
  setShowTypes,
  showPrice,
  setShowPrice,
  showAbv,
  setShowAbv,
  sortBy,
  setSortBy,
}: SearchProps) => {
  // chaning input for search bar
  function handleSearchChange(e: any) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  function onChangeSortBy(e: any) {
    const tVal = e.target.value;
    setSortBy(tVal);
  }

  return (
    <div className="grid grid-cols-6 gap-5">
      <div className="lg:col-span-4 col-span-full">
        <form>
          <input
            key="search-bar"
            id="default-search"
            type="text"
            placeholder="Search By Name"
            onChange={handleSearchChange}
            value={searchInput}
            className="hover:ring-4 hover:ring-slate-500 focus:ring-4 focus:ring-blue-500 rounded-md p-3 pl-7 w-full bg-gray-800"
          />
        </form>
      </div>
      <div className="dropdown dropdown-bottom col-span-3 lg:col-span-1">
        <label tabIndex={0} className="btn w-full bg-gray-800">
          Filters
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-gray-800 rounded-box w-52 mt-2"
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
      <select className="select w-full max-w-xs lg:col-span-1 col-span-3" onChange={onChangeSortBy} defaultValue={"name"}>
        <option disabled={true} value={""}>
          Sort By:
        </option>
        <option value={"name"}>Name</option>
        <option value={"pricelh"}>Price (low -&gt; high)</option>
        <option value={"pricehl"}>Price (high -&gt; low)</option>
        <option value={"abvlh"}>Abv (low -&gt; high)</option>
        <option value={"abvhl"}>Abv (high -&gt; low)</option>
      </select>
    </div>
  );
};

export default SearchBarFiltersSort;
