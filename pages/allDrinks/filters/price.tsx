import { FC } from "react";

interface PriceProps {
  handleChangeFilterInput(e: any): void;
}

const Price: FC<PriceProps> = ({ handleChangeFilterInput }: PriceProps) => {
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

export default Price;