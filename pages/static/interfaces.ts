export interface Look {
    bottomColor: string
    topColor: string
    extraColors: string[]
}

export interface Taste {
    shapeT: string[]
    bitternessT: string
    tasteT: string
    tastingNotesT: string
}

export interface Linger {
    shapeL: string[]
    tasteL: string
    tastingNotesL: string
}

export interface FullTasting {
    look: Look | undefined
    taste: Taste | undefined
    linger: Linger | undefined
}

export interface ReviewedDrink {
    id: string
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

export interface NotReviewedDrink {
    id: string
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

export interface Drink {
    drink: ReviewedDrink | NotReviewedDrink
}