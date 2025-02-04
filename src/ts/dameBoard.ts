import Piece from "./piece";
import { Color } from "./utils";

export default class DameBoard {
   
    private _turn: Color;
    private _board: (Piece | null)[][] = [];
    static boardSize: number=10;

    constructor() {
        this._turn = Color.White;
        for (let row = 0; row < DameBoard.boardSize; row++) {
            this._board[row] = [];
            for (let col = 0; col < DameBoard.boardSize; col++) {
                if (this.isValideCase(row,col)) {
                    if (row < 4) {
                        this._board[row][col] = new Piece(Color.White);
                    }else if (row > 5) {
                        this._board[row][col] = new Piece(Color.Black);
                    }else {
                        this._board[row][col] = null;
                    }
                }
                else {
                    this._board[row][col] = null;
                }
            }
        }
    }

    isValideCase(row: number, col: number): boolean {
        return row >= 0 && row < DameBoard.boardSize && col >= 0 && col < DameBoard.boardSize && (row + col) % 2 === 0;
    }
    
    get dameBoardView(): (Piece | null)[][] {
        return this._board;
    }

    get playerTurn(): Color {

        return this._turn;
    }
}