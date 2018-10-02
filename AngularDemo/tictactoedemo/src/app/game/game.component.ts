import {Component, OnInit} from '@angular/core';
import {Square} from '../model/square';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  public squares: Array<Square> = [];
  public message: string;
  private activePlayer = 'X';

  constructor() {
    for (let i = 0; i < 9; i++) {
      this.squares.push(new Square(i, null));
    }
    this.calculateMessage();
  }

  onSquareClicked(square: Square) {
    if (this.calculateWinner() || square.value) {
    } else {
      square.value = this.activePlayer;
      this.toggleActivePlayer();
    }
    this.calculateMessage();
  }

  calculateMessage() {
    const winner = this.calculateWinner();
    if (winner) {
      this.message = `Winner ${winner}`;
    } else {
      this.message = `Next Player ${this.activePlayer}`;
    }
  }

  toggleActivePlayer() {
    this.activePlayer = this.nextPlayer();
  }

  nextPlayer(): string {
    return this.activePlayer === 'X' ? 'O' : 'X';
  }

  calculateWinner(): string {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (this.squares[a].value && this.squares[a].value === this.squares[b].value && this.squares[b].value === this.squares[c].value) {
        return this.squares[a].value;
      }
    }
    return;
  }

}
