import { SetStateAction } from "react";

interface OriginGroup {
  bool: boolean;
  str: string;
  fun(value: SetStateAction<boolean>): void;
}

interface OriginProps {
  origins: OriginGroup[];
}

/**
 * OriginFilter: Filter for origin on the main page

 * @returns tsx component
 */
function OriginFilter({ origins }: OriginProps) {
  /**
   * originButtons: takes in whether or not the button is on, then returns the related css
   * @param b boolean of whether or not the button is on
   * @returns string of the css relative to the button having been clicked
   */
  function originButtons(b: boolean): string {
    if (!b) {
      return "p-2 border-2 rounded-lg border-black bg-gray-800 col-span-1 cursor-pointer text-center";
    }
    return "p-2 border-2 rounded-lg border-black bg-green-500 col-span-1 cursor-pointer text-center";
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-2 pt-5">
      {origins.map((element: OriginGroup) => {
        var addCSS = "";
        if (element.str == "American" || element.str == "Japanese") {
          addCSS = " md:col-start-2";
        }
        return (
          <input
            key={element.str}
            type="button"
            value={element.str}
            className={originButtons(element.bool) + addCSS}
            onClick={() => element.fun(!element.bool)}
          />
        );
      })}
    </div>
  );
}

export { OriginFilter };
export type { OriginGroup };
