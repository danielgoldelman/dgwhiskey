import { Drink } from "@/public/static/interfaces";

export default function sortByFun(showDrinks: Drink[], choice: string): Drink[] {
  switch (choice) {
    case "name":
      return showDrinks.sort((a, b) => (a.drink.name < b.drink.name ? -1 : 1));
    case "pricelh":
      return showDrinks.sort((a, b) =>
        a.drink.price < b.drink.price ? -1 : 1
      );
    case "pricehl":
      return showDrinks.sort((a, b) =>
        a.drink.price > b.drink.price ? -1 : 1
      );
    case "abvlh":
      return showDrinks.sort((a, b) => (a.drink.abv < b.drink.abv ? -1 : 1));
    case "abvhl":
      return showDrinks.sort((a, b) => (a.drink.abv > b.drink.abv ? -1 : 1));
    default:
      return showDrinks;
  }
}
