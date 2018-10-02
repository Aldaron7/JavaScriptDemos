import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showName: boolean = true;
  names = ['Peter Falk', 'Mary-Ann Blige', 'Eminem'];
  selection = 'name';
  options = ['name', 'address', 'other'];
  selectedAnimal = 'cat';
  animals = ['cat', 'dog', 'zebra', 'giraffe'];
  title = 'App Works!';

  toggle() {
    this.showName = !this.showName;
  }
  onAnimalClicked(event: Event) {
    const clickedAnimal = event.srcElement.innerHTML.trim();
    this.selectedAnimal = clickedAnimal;
  }
  getAnimalStyle(animal) {
    const isSelected = animal === this.selectedAnimal;
    return {
      padding: '10px',
      margin: '10px',
      color: isSelected ? '#ffffff' : '#000000',
      'background-color': isSelected ? '#ff00ff' : '#ffffff'
    };
  }
}
