import { FC, SetStateAction, useState } from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface AbvProps {
  minA: number;
  maxA: number;
  setMinA(value: SetStateAction<number>): void;
  setMaxA(value: SetStateAction<number>): void;
}

/**
 * Abv: abv filter for the main page
 * @param handleChangeFilterInput handler for adjusting filter input
 * @returns tsx component
 */
const Abv: FC<AbvProps> = ({ minA, maxA, setMinA, setMaxA }: AbvProps) => {
  const [values, setValues] = useState<[number, number]>([minA, maxA]);

  const handleValuesChange = (newValues: number | number[]) => {
    if (Array.isArray(newValues)) {
      setValues(newValues as [number, number]);
      setMinA(values[0]);
      setMaxA(values[1]);
    }
  };

  return (
    <div className="pt-5 lg:px-20 xl:px-36">
      <div className="p-2 border-2 rounded-lg border-black bg-gray-800 grid grid-cols-9 pb-6 gap-x-3 sm:gap-x-0">
        <div className="col-span-full text-lg place-self-center">
          ABV Range:
        </div>
        <div className="place-self-center">{minA}</div>
        <div className="self-center col-span-7">
          <Slider
            min={0}
            max={60}
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
        <div className="place-self-center">{maxA}</div>
      </div>
    </div>
  );
};

export default Abv;
