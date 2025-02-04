import DameBoard from "./dameBoard";
import { Coord, SafeSquares } from "./utils";

export default class Game {
  private _dameBoard = new DameBoard();
  public dameBoardView = this._dameBoard.dameBoardView;
  public playerTurn = this._dameBoard.playerTurn;

  constructor() {
    // debugger
    let boardElement = document.getElementById("board");
    if (boardElement) {
      boardElement.className = `flex flex-col-reverse`;
      for (let row = 0; row < DameBoard.boardSize; row++) {
        let rowElement = document.createElement("div");
        rowElement.className = `flex flex-row`;
        for (let col = 0; col < DameBoard.boardSize; col++) {
          let caseElement = document.createElement("div");
          caseElement.className = `w-[50px] h-[50px] flex items-center justify-center ${
            this._dameBoard.isValideCase(row, col)
              ? "bg-[#8b4513]"
              : "bg-[#deb887]"
          }`;
          this.createSquare(row, col, caseElement);
          caseElement.addEventListener("click", () => {
            this.selectCase(row, col);
          });
          // caseElement.textContent = `${row},${col}`
          rowElement.appendChild(caseElement);
        }
        boardElement?.appendChild(rowElement);
      }
    }
  }

  createSquare(row: number, col: number, element: HTMLElement) {
    let caseElement = document.createElement("div");
    caseElement.className = `w-[50px] h-[50px] flex items-center justify-center ${
      this._dameBoard.isValideCase(row, col) ? "bg-[#8b4513]" : "bg-[#deb887]"
    }`;
    // caseElement.dataset.row = row.toString();
    // caseElement.dataset.col = col.toString();
    if (this.dameBoardView[row][col]) {
        let piece = this.dameBoardView[row][col];
        caseElement.innerHTML = `
        <div class="w-[40px] h-[40px] rounded-full border-1 flex items-center justify-center relative ${piece?.color === 1 ? "bg-white border-black" : "bg-black border-white"}">
            <div class="w-[30px] h-[30px] rounded-full border-1 ${piece?.color === 1 ? "border-black" : "border-white"}">
                ${piece?.isQueen ? `<div class="w-[40px] h-[40px] absolute top-[-8px] right-[-1px] rounded-full border-1 flex items-center justify-center relative ${piece?.color === 1 ?"bg-white border-black" : "bg-black border-white"}">
                    <div class="w-[30px] h-[30px] rounded-full border-1 ${ piece?.color === 1 ? "border-black" : "border-white"}"></div>
                </div>` :""}
            </div>
        </div>`;
    }
    caseElement.addEventListener("click", () => {
      this.selectCase(row, col);
    });
    element.appendChild(caseElement);
  }

  findSafeSquares(): SafeSquares {
    let safeSquares: SafeSquares = new Map<string, Coord[]>();
    for (let row = 0; row < DameBoard.boardSize; row++) {
      for (let col = 0; col < DameBoard.boardSize; col++) {}
    }
    return safeSquares;
  }
  selectCase(row: number, col: number) {
    if (!this.isValideCase(row, col)) {
      return;
    }
    console.log(row, col);
  }

  isValideCase(row: number, col: number): boolean {
    return this._dameBoard.isValideCase(row, col);
  }
}
