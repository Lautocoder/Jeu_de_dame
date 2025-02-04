import { Coord, Color } from "./utils";


export default class Piece {
    private _color: Color;
    private _direction: Coord[];
    private _isQueen: boolean;

    constructor(color: Color) {
        this._color = color;
        this._direction = [
            {x: 1, y: -1},
            {x: 1, y: 1},
            {x: -1, y: -1},
            {x: -1, y: 1}
        ];
        this._isQueen = false;
    }

    public get color(): Color {
        return this._color;
    }
    public get direction(): Coord[] {
        return this._direction;
    }
    public get isQueen(): boolean {
        return this._isQueen;
    }
    public set isQueen(value: boolean) {
        this._isQueen = value;
    }
}