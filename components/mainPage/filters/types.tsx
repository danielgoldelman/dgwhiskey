import { FC, SetStateAction } from "react";

interface TypesProps {
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

/**
 * TypesFilter: Filter for type on the main page
 * @param b1 boolean for the first type (useState 1/2)
 * @param b2 boolean for the second type (useState 1/2)
 * @param b3 boolean for the third type (useState 1/2)
 * @param s1 string for the first type
 * @param s2 string for the second type
 * @param s3 string for the third type
 * @param f1 setState for the first type (useState 2/2)
 * @param f2 setState for the second type (useState 2/2)
 * @param f3 setState for the third type (useState 2/2)
 * @returns tsx component
 */
const TypesFilter: FC<TypesProps> = ({
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

  /**
   * typeButtons: takes in whether or not the button is on, then returns the related css
   * @param b boolean of whether or not the button is on
   * @returns string of the css relative to the button having been clicked
   */
  const typeButtons = (b: boolean): string => {
    if (!b) {
      return "p-2 border-2 rounded-lg border-black bg-gray-800 col-span-1 cursor-pointer text-center";
    }
    return "p-2 border-2 rounded-lg border-black bg-[#3c46fb] col-span-1 cursor-pointer text-center";
  };

  return (
    <div className="grid grid-cols-5 gap-2 pt-5">
      <input
        type="button"
        value={s1}
        className={typeButtons(b1) + " col-start-2"}
        onClick={() => f1(!b1)}
      />
      <input
        type="button"
        value={s2}
        className={typeButtons(b2) + ""}
        onClick={() => f2(!b2)}
      />
      <input
        type="button"
        value={s3}
        className={typeButtons(b3) + ""}
        onClick={() => f3(!b3)}
      />
    </div>
  );
};

export default TypesFilter;
