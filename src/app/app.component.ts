import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick() {
    this.password = 'My password';
    console.log(`
      About to generate a password with the following:
      Includes letters: ${this.includeLetters}
      Includes numbers: ${this.includeNumbers}
      Includes symbols: ${this.includeSymbols}
      `)
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }
}