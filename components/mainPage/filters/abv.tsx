import { FC, SetStateAction } from "react";

interface AbvProps {
  setMinA(value: SetStateAction<number>): void;
  setMaxA(value: SetStateAction<number>): void;
}

/**
 * Abv: abv filter for the main page
 * @param handleChangeFilterInput handler for adjusting filter input
 * @returns tsx component
 */
const Abv: FC<AbvProps> = ({ setMinA, setMaxA }: AbvProps) => {

  // changing filter input for price
  const handleChangeFilterInput = (e: any) => {
    const val = e.target.value;
    switch (e.target.name) {
      case "minP":
        setMinA(val);
        break;
      case "maxP":
        setMaxA(val);
        break;
    }
  };

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

export default Abv;
