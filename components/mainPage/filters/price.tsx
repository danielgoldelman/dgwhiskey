import { FC, SetStateAction, useState } from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
interface PriceProps {
  minP: number;
  maxP: number;
  setMinP(value: SetStateAction<number>): void;
  setMaxP(value: SetStateAction<number>): void;
}

/**
 * Abv: abv filter for the main page
 * @param handleChangeFilterInput handler for adjusting filter input
 * @returns tsx component
 */
const Price: FC<PriceProps> = ({ minP, maxP, setMinP, setMaxP }: PriceProps) => {
  const [values, setValues] = useState<[number, number]>([minP, maxP]);

  const handleValuesChange = (newValues: number | number[]) => {
    if (Array.isArray(newValues)) {
      setValues(newValues as [number, number]);
      setMinP(values[0]);
      setMaxP(values[1]);
    }
  };
  
  return (
    <div className="pt-5 lg:px-20 xl:px-36">
      <div className="p-2 border-2 rounded-lg border-black bg-gray-800 grid grid-cols-9 pb-6 gap-x-3 sm:gap-x-0">
      <div className="col-span-full text-lg place-self-center">Price Range:</div>
        <div className="place-self-center">{minP}</div>
        <div className="self-center col-span-7">
          <Slider
            min={0}
            max={200}
            value={values}
            onChange={handleValuesChange}
            range
            trackStyle={[{ backgroundColor: "#4F46E5" }]}
            handleStyle={[
              { backgroundColor: "#4F46E5", borderColor: "#4F46E5" },
              { backgroundColor: "#4F46E5", borderColor: "#4F46E5" },
            ]}
            railStyle={{ backgroundColor: "#E5E7EB" }}
          />
        </div>
        <div className="place-self-center">{maxP}</div>
      </div>
    </div>
  );
};

export default Price;
