import { FC, SetStateAction } from "react";

interface OriginProps {
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

/**
 * OriginFilter: Filter for origin on the main page
 * @param bS function that defines strings for button css based on their associated value
 * @param b1 boolean for the first origin (useState 1/2)
 * @param b2 boolean for the second origin (useState 1/2)
 * @param b3 boolean for the third origin (useState 1/2)
 * @param b4 boolean for the fourth origin (useState 1/2)
 * @param s1 string for the first origin
 * @param s2 string for the second origin
 * @param s3 string for the third origin
 * @param s4 string for the fourth origin
 * @param f1 setState for the first origin (useState 2/2)
 * @param f2 setState for the second origin (useState 2/2)
 * @param f3 setState for the third origin (useState 2/2)
 * @param f4 setState for the fourth origin (useState 2/2)
 * @returns tsx component
 */
const OriginFilter: FC<OriginProps> = ({
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

  /**
   * originButtons: takes in whether or not the button is on, then returns the related css
   * @param b boolean of whether or not the button is on
   * @returns string of the css relative to the button having been clicked
   */
  function originButtons (b: boolean): string {
    if (!b) {
      return "p-2 border-2 rounded-lg border-black bg-gray-800 col-span-1 cursor-pointer text-center";
    }
    return "p-2 border-2 rounded-lg border-black bg-green-500 col-span-1 cursor-pointer text-center";
  };

  return (
    <div className="grid grid-cols-6 gap-2 pt-5">
      <input
        type="button"
        value={s1}
        className={originButtons(b1) + " col-start-2"}
        onClick={() => f1(!b1)}
      />
      <input
        type="button"
        value={s2}
        className={originButtons(b2) + ""}
        onClick={() => f2(!b2)}
      />
      <input
        type="button"
        value={s3}
        className={originButtons(b3) + ""}
        onClick={() => f3(!b3)}
      />
      <input
        type="button"
        value={s4}
        className={originButtons(b4) + ""}
        onClick={() => f4(!b4)}
      />
    </div>
  );
};

export default OriginFilter