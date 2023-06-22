import { Drink, ReviewedDrink, NotReviewedDrink } from "../interfaces";
import { ReviewedDrinkRet, NotReviewedDrinkRet } from "../shared/drinks";
import NameAbvCostLine from "../shared/nameAbvCostLine";

interface typ {
  allDrinksOfType: Drink[]
}

/**
 * This function displays a list of drinks with their details and a link to their full review, with an
 * asterisk denoting drinks that have not been reviewed yet.
 * @param {MultDrinks}  - The function `ShowAllDrinks` takes in an object with a property `showDrinks`,
 * which is an array of objects. Each object in the `showDrinks` array has a property `drink`, which is
 * an object with properties `name`, `origin`, `maker`, `owned
 * @returns a JSX element that maps over an array of objects and conditionally renders a collapsible
 * drink card for each object based on whether the "reviewed" property is true or false. The card
 * displays information about the drink such as its name, origin, maker, type, price, and ABV. If the
 * drink has been reviewed, there is also a link to a full review
 */
export default function ShowTypeDrinks({ allDrinksOfType }: typ) {
  return (
    <div className="grid grid-cols-11 pb-8 sm:pb-14 pt-4 sm:pt-6">
      <div className="col-span-9 col-start-2">
        <NameAbvCostLine />
        {allDrinksOfType.map(({ drink }) => {
          return drink.reviewed
            ? ReviewedDrinkRet(drink as ReviewedDrink)
            : NotReviewedDrinkRet(drink as NotReviewedDrink);
        })}
      </div>
    </div>
  );
}
