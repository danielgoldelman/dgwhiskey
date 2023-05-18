import { FC, SetStateAction } from "react";

interface TypesGroup {
  bool: boolean;
  str: string;
  fun(value: SetStateAction<boolean>): void;
}

interface TypesProps {
  types: TypesGroup[];
}

/**
 * TypesFilter: Filter for type on the main page

 * @returns tsx component
 */
const TypesFilter: FC<TypesProps> = ({ types }: TypesProps) => {
  /**
   * typeButtons: takes in whether or not the button is on, then returns the related css
   * @param b boolean of whether or not the button is on
   * @returns string of the css relative to the button having been clicked
   */
  function typeButtons(b: boolean): string {
    if (!b) {
      return "p-2 border-2 rounded-lg border-black bg-gray-800 col-span-1 cursor-pointer text-center";
    }
    return "p-2 border-2 rounded-lg border-black bg-[#3c46fb] col-span-1 cursor-pointer text-center";
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-2 pt-5">
      {types.map((element: TypesGroup) => {
        if (element.str == "Bourbon" || element.str == "Single Pot") {
          return (
            <input
              type="button"
              value={element.str}
              className={typeButtons(element.bool) + " md:col-start-2"}
              onClick={() => element.fun(!element.bool)}
            />
          );
        }
        return (
          <input
            type="button"
            value={element.str}
            className={typeButtons(element.bool)}
            onClick={() => element.fun(!element.bool)}
          />
        );
      })}
    </div>
  );
};

export { TypesFilter };
export type { TypesGroup }