import { ReviewedDrink } from "../public/static/interfaces";

/**
 * origins: map of strings for origins
 */
export const origins = {
  american: "American",
  scottish: "Scottish",
  irish: "Irish",
  canadian: "Canadian",
  japanese: "Japanese",
  dutch: "Dutch",
  english: "English",
  welsh: "Welsh",
  indian: "Indian",
};

/**
 * types: map of strings for types
 */
export const types = {
  bourbon: "Bourbon",
  rye: "Rye",
  tennessee: "Tennessee",
  singlePot: "Single Pot",
  singleMalt: "Single Malt",
  blended: "Blended",
};

/**
 * defaultDrink: a made-up drink of type ReviewedDrink for testing
 */
export const defaultDrink = {
    id: "6e340b9cffb37a989ca544e6bb780a2c78901d3fb33738768511a30617afa01d",
    name: "Test Name Drink 1",
    maker: "Test Maker Drink 1",
    ownedBy:"Test Owned By 1",
    origin: "Scottish",
    type: "Single Malt",
    price: 15,
    abv: 10,
    reviewed: true,
    fullTasting: {
      overview: "Test Overview",
      look: {
        bottomColor: "Test Bottom Color",
        topColor: "Test Top Color",
        extraColors: ["EC1", "EC2"],
        viscosity: "Test Viscosity",
      },
      taste: {
        shapeT: ["S1T", "S2T"],
        bitternessT: "Test BitternessT",
        tasteT: "Test TasteT",
        tastingNotesT: "Test Tasting NotesT",
      },
      linger: {
        shapeL: ["S1L", "S2L"],
        tasteL: "Test TasteL",
        tastingNotesL: "Test Tasting NotesL",
      },
    },
} as ReviewedDrink;