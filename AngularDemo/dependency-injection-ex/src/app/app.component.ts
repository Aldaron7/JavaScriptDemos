import { Component, Injector } from '@angular/core';
import { LoggingService } from './logging.service';
import { Card } from './card';

class Watch {
  getTime(): string {
    return new Date().toLocaleString();
  }
}

class Seiko extends Watch {
  getTime(): string {
    return 'Seiko Time: ' + super.getTime();
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: Watch, useClass: Seiko },
    provideLoggingService(),
    {
      provide: Card,
      useFactory: () => {
        const suite: number = Math.floor(Math.random() * 4);
        const suiteName: string = suite == 0 ? 'Clubs' : suite == 1 ? 'Diamonds' : suite == 2 ? 'Hearts' : 'Spades';
        const rank: number = Math.floor(Math.random() * 15);
        const rankName: string = rank == 0 ? 'Ace' : rank == 1 ? 'Joker' : rank == 2 ? 'King' : rank == 3 ? 'Queen' : (rank - 3).toString();
        return new Card(suiteName, rankName);
      }
    }, {provide: 'language', useValue: 'en'}
  ]
})
export class AppComponent {
  title = 'app';
  language = '';

  constructor(private watch: Watch, private logging: LoggingService, card: Card, private injector: Injector) {
    logging.log('test log');
    this.title = card.toString();
    this.language = 'Language is ' + this.injector.get('language');
  }
}

export const LOGGING_USE_DATE = true;
export function provideLoggingService() {
  return {
    provide: LoggingService,
    useFactory: () => new LoggingService(LOGGING_USE_DATE)
  };
}
