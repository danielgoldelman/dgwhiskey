import { ReviewedDrink } from "./interfaces";

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
  bourbon: {
    str: "Bourbon",
    description:
      "Bourbon whiskeys have specific requirements placed upon them, and have a very distinct taste that sets them apart from other whiskey types due primarily to the fact that the mash (mixture of grains distilled in the whiskey) must be at least 51% corn. The mash must be at most 160 proof (80% alcohol), the distillate must be stored in newly made oak barrels with at most 125 proof (62.5), and must be a pure distallate (no addatives). Furthermore, bourbon must be stored in charred oak barrels. There is no minimum ageing requirement, but to be defined as a 'straight bourbon' it must be aged at least 2 years, and if it has been aged less than 4 it is required to have the age on its label.",
  },
  rye: {
    str: "Rye",
    description:
      "Rye whiskeys share most of the same restrictions with bourbon, with one key change: the mash must contain 51% rye. Other restrictions include: the mash must be at most 160 proof (80% alcohol), the distillate must be stored in newly made oak barrels with at most 125 proof (62.5), the distallate must be pure (no addatives), and be stored in charred oak barrels. There is no minimum ageing requirement, but to be defined as a 'straight rye whiskey' it must be aged at least 2 years. Rye whiskey is know for a spicy or fruity flavor, less sweet due to the rye, and is normally quite strong to newer drinkers. If you are not an experienced whiskey drinker, or are interested in purchasing American whiskeys, I would recommend starting with bourbon. For more experienced drinkers, rye whiskey might be an interesting path of discovery. Do note that this only pertains to American rye whiskey... there are a very small number of rye whiskeys from other countries, but they are far less prevalent.",
  },
  tennessee: {
    str: "Tennessee",
    description:
      "Tennessee whiskey is a subset of bourbon with the added distinction of being distilled in Tennessee and adding one step to the filtering process: the Lincoln County Process. This process involves filtering the whiskey in a layer of maple charcoal. This supposedly improves the flavor of the whiskey, but that is to be determined by the individual drinker.",
  },
  singlePot: {
    str: "Single Pot",
    description:
      "Single Pot whiskey is a distincly Irish whiskey. There may be a few examples worldwide that describe themselves as such, but the true Single Pot Still whiskeys are from Ireland and are made from a single distillery with a mixed mash of malted and unmalted barley distilled in a pot still. It is important to include the unmalted barley and salt to generate spicy flavors or a thicker texture, which is a characteristic of most Irish whiskey. Whiskeys made from different distilleries may be called pot still whiskey, but will lack the 'single' pot still label. Most whiskey drinkers will have tried a single pot still whiskey at some point, but may not have known it at the time. Single Pot Still whiskeys have a large amount of variety among the different locations in Ireland.",
  },
  singleMalt: {
    str: "Single Malt",
    description:
      "Single Malt whiskey is the premier whiskey found in Scotland. Single Malt Scotch is the favorite whiskey of many whiskey enthusaists, and is widely loved worldwide. This type of whiskey has a few restrictions: it must be made with barley, water, and yeast, and must be matured in oak vasks in Scotland. There are no restrictions on the time that the whiskey must be matured in the cask, but the overwhelming majority will be matured at least 2 years. The origin and usages of the casks used to mature the whiskey will likely be on the label. There are a few distinctions to be made when thinking about Single Malt Scotch. There are 5 main categories: Lowland, Highland, Campbeltown, Islay, and Speyside, each relating to a different part of Scotland. There are a few characteristics common to each category that are loosely accepted by the worldwide whiskey community, but it is largely accepted that these divisions are based on tradition rather than hard rules on taste. I will leave it up to the individual reader to determine the difference between these categories. Countries outside of Scotland have their own restrictions as to how their distilleries should or should not label their whiskey as a Single Malt whiskey, but the true Single Malt whiskeys are the ones from Scotland.",
  },
  blended: {
    str: "Blended",
    description:
      "Blended whiskeys are made by combining different types of whiskeys (malt and grain) from different distilleries. These whiskeys are normally quite smooth and complex due to the fact that they are combining the taste profiles and other distinguishing characteristics from multiple whiskeys. Most Canadian and Japanese whiskeys are blended whiskeys. An important thing to know about blended whiskeys is that the definition of a blended whiskey varies by country. Canada defines a blended whiskey as being a combination of any grain spirits aged for at least three years. Irish blended whiskey is a blend of two or more whiskey types among pot still, malt, and grain whiskey. Blended Malt Scotch means a blend of two or more single malt Scotch whiskeys from more than one distillery, Blended Grain Scotch means a blend of two or more grain Scotch whiskies from more than one distillery, Blended Scotch means a blend of one or more Single Malt Scotch whiskies and one or more single grain whiskies. American blended whiskey must contain a minimum of 20% straight whiskey, and any American blended whiskey containing a minimum of 51% straight whiskey of type rye, malt, wheat, or bourbon whiskey must include the type in the label.",
  },
};

/**
 * defaultDrink: a made-up drink of type ReviewedDrink for testing
 */
export const defaultDrink = {
  name: "Test Name Drink 1",
  maker: "Test Maker Drink 1",
  ownedBy: "Test Owned By 1",
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
