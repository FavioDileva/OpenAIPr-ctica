import { Component } from '@angular/core';
import { Textdavinciedit001Service } from 'services/textdavinciedit001.service';

@Component({
  selector: 'app-textdavinciedit001',
  template: `
    <div>
      <h1>OpenAI Text Generator</h1>
      <form (submit)="onSubmit()">
        <label for="prompt">Prompt:</label>
        <input type="text" id="prompt" [(ngModel)]="prompt" name="prompt">
        <button type="submit">Generate Text</button>
      </form>
    </div>

    <div *ngIf="text">
      <p>{{text}}</p>
    </div>
  `,
  providers: [Textdavinciedit001Service]
})
export class Textdavinciedit001Component {
  prompt = '';
  text = '';

  constructor(private textdavinciedit001Service: Textdavinciedit001Service) {}

  onSubmit(): void {
    this.generateText(this.prompt);
  }

  generateText(prompt: string): void {
    this.textdavinciedit001Service.generateText(prompt).subscribe((response: any) => {
      this.text = response.choices[0].text;
    });
  }
}

