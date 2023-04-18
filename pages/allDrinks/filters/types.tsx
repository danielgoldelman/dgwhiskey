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
