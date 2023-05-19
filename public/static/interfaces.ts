/**
 * Look: interface for Look section of a FullTasting
 */
export interface Look {
    bottomColor: string
    topColor: string
    extraColors: string[]
}

/**
 * Taste: interface for Taste section of a FullTasting
 */
export interface Taste {
    shapeT: string[]
    bitternessT: string
    tasteT: string
    tastingNotesT: string
}

/**
 * Look: interface for Taste section of a FullTasting
 */
export interface Linger {
    shapeL: string[]
    tasteL: string
    tastingNotesL: string
}

/**
 * FullTasting: interface for FullTasting section of a ReviewedDrink
 */
export interface FullTasting {
    overview: string
    look: Look
    taste: Taste
    linger: Linger
}

/**
 * ReviewedDrink: interface for a fully reviewed drink (with full tasting)
 */
export interface ReviewedDrink {
    name: string
    maker: string
    ownedBy: string
    origin: string
    type: string
    price: number
    abv: number
    reviewed: boolean
    fullTasting: FullTasting
}

/**
 * NotReviewedDrink: interface for a non reviewed drink (review incoming)
 */
export interface NotReviewedDrink {
    name: string
    maker: string
    ownedBy: string
    origin: string
    type: string
    price: number
    abv: number
    reviewed: boolean
    fullTasting: null
}

/**
 * Drink: interface defining a drink to be shown on the main page as one of the two types of drinks
 */
export interface Drink {
    drink: ReviewedDrink | NotReviewedDrink
}