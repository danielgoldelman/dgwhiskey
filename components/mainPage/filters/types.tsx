import { SetStateAction } from "react";

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
function TypesFilter({ types }: TypesProps) {
  function typeButtons(b: boolean): string {
    if (!b) {
      return "p-2 border-2 rounded-lg border-black bg-gray-800 col-span-1 cursor-pointer text-center";
    }
    return "p-2 border-2 rounded-lg border-black bg-[#3c46fb] col-span-1 cursor-pointer text-center";
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-2 pt-5">
      {types.map((element: TypesGroup) => {
        var addCSS = "";
        if (element.str == "Bourbon" || element.str == "Single Pot") {
          addCSS = " md:col-start-2";
        }
        return (
          <input
            key={element.str}
            type="button"
            value={element.str}
            className={typeButtons(element.bool) + addCSS}
            onClick={() => element.fun(!element.bool)}
          />
        );
      })}
    </div>
  );
}

export { TypesFilter };
export type { TypesGroup };
