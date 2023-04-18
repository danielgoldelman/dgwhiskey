import { FC } from "react";

interface AbvProps {
  handleChangeFilterInput(e: any): void;
}

const Abv: FC<AbvProps> = ({ handleChangeFilterInput }: AbvProps) => {
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
