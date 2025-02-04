
export type Coord = {
    x: number,
    y: number
}

export enum Color{
    Black ,
    White
}

export type SafeSquares = Map<string, Coord[]>;