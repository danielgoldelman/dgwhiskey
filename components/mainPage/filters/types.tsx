import { FC, SetStateAction } from "react";

interface TypesProps {
  bS(e: any): void;
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
 * @param bS function that defines strings for button css based on their associated value
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
  bS,
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
  return (
    <div className="grid grid-cols-5 gap-2 pt-5">
      <input
        type="button"
        value={s1}
        className={bS(b1) + " col-start-2"}
        onClick={() => f1(!b1)}
      />
      <input
        type="button"
        value={s2}
        className={bS(b2) + ""}
        onClick={() => f2(!b2)}
      />
      <input
        type="button"
        value={s3}
        className={bS(b3) + ""}
        onClick={() => f3(!b3)}
      />
    </div>
  );
};

export default TypesFilter;
