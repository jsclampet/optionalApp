import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText: string = faker.lorem.sentence();
  userInput: string = '';

  onUserInputChange(value: string) {
    this.userInput = value;
  }

  compare( loremLetter: string, inputLetter: string) {
    if (!inputLetter) {
      return "pending";
    }
    return inputLetter === loremLetter ? "correct" : "incorrect";
  }
}
