import { FC, SetStateAction } from "react";

interface OriginProps {
  bS(e: any): void;
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
  bS,
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
  return (
    <div className="grid grid-cols-6 gap-2 pt-5">
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
      <input
        type="button"
        value={s4}
        className={bS(b4) + ""}
        onClick={() => f4(!b4)}
      />
    </div>
  );
};

export default OriginFilter