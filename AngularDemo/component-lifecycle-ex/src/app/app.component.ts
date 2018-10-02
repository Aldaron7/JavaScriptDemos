import {
  Component,
  OnChanges,
  Input,
  SimpleChanges,
  OnInit,
  DoCheck,
  IterableDiffers,
  AfterContentInit,
  ContentChildren,
  QueryList,
  AfterContentChecked,
  ContentChild,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

const CARD_ACE_OF_SPADES = 'ace of spades';
const CARD_TEN_OF_CLUBS = 'ten of clubs';

@Component({
  selector: 'app-name',
  template: `
  <p *ngFor="let change of changes">
  {{change}}
  </p>
  `,
  styles: []
})
export class NameComponent implements OnChanges {
  @Input('name') name;
  changes: Array<string> = [''];

  ngOnChanges(changes: SimpleChanges) {
    this.changes.push(JSON.stringify(changes));
  }
}

@Component({
  selector: 'app-numbers',
  template: `
{{numbersArray}}
<br/>
<p *ngFor="let change of changes">
{{change}}
</p>
`,
  styles: ['p{padding:0;margin:0}']
})
export class NumbersComponent implements DoCheck {
  @Input('numbers') numbersArray: Array<string>;
  changes: Array<string> = [];
  differ;
  constructor(private differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
  }
  ngDoCheck() {
    const differences = this.differ.diff(this.numbersArray);
    if (differences) {
      if (differences.forEachAddedItem) {
        differences.forEachAddedItem(item => {
          if (item && item.item) {
            this.changes.push('added ' + item.item);
          }
        });
      }
      if (differences.forEachRemovedItem) {
        differences.forEachRemovedItem(item => {
          if (item && item.item) {
            this.changes.push('removed ' + item.item);
          }
        });
      }
    }
  }
}

@Component({
  selector: 'app-member',
  template: `
  <p [style.backgroundColor]="getBackgroundColor()"><ng-content></ng-content></p>
  `,
  styles: ['p{padding: 5px}']
})
export class MemberComponent {
  selected = false;
  getBackgroundColor() {
    return this.selected ? '#FFCCCC' : '#CCFFFF';
  }
}

@Component({
  selector: 'app-crew',
  template: `
  <p><ng-content></ng-content></p>
  `,
  styles: []
})
export class CrewComponent implements AfterContentInit {
  @ContentChildren(MemberComponent) members: QueryList<MemberComponent>;
  ngAfterContentInit() {
    this.members.first.selected = true;
  }
}

@Component({
  selector: 'app-card',
  template: `
  <ng-content></ng-content>
  `,
  styles: []
})
export class CardComponent {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  name: string = '';
  input: string = '';
  interval;
  count = 0;
  logs: Array<string> = [new Date() + ''];
  numbers: string = '';
  card = CARD_ACE_OF_SPADES;
  @ContentChild(CardComponent) contentChild: CardComponent;
  @ViewChild('firstInput') firstInput;
  @ViewChild('message') message;

  constructor() {
    for (let i = 0; i < 1000; i++) {
      console.log(i);
    }
  }

  ngOnInit() {
    this.logs.push(new Date() + '');
    this.interval = setInterval(() => {
      this.count++;
    }, 1000);
  }

  ngAfterContentChecked() {
    console.log('content inside card has been checked: ' + this.card);
  }

  ngAfterViewInit() {
    this.firstInput.nativeElement.focus();
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked');
    const newLocal = parseInt(this.input, null);
    console.log('ParsedInt', newLocal);
    if (isNaN(newLocal)) {
      this.message.nativeElement.innerHTML = 'Input not numeric.';
    } else {
      this.message.nativeElement.innerHTML = 'Input is numeric.';
    }
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    delete this.interval;
  }

  pickCard() {
    this.card = this.card === CARD_ACE_OF_SPADES ? CARD_TEN_OF_CLUBS : CARD_ACE_OF_SPADES;
  }
}
