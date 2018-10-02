import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Square} from '../model/square';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  @Input() squares: Array<Square>;
  @Output() squareClicked = new EventEmitter<Square>();

  onClicked(square: Square): void {
    this.squareClicked.emit(square);
  }

}
