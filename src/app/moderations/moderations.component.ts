import { Component } from '@angular/core';
import { ModerationsService } from 'services/moderations.service';

@Component({
  selector: 'app-moderations',
  template: `
    <div>
      <h1>Modera tu texto</h1>
      <form (submit)="onSubmit()">
        <label for="prompt">Texto a moderar:</label>
        <input type="text" id="prompt" [(ngModel)]="prompt" name="prompt">
        <button type="submit">Moderar</button>
      </form>
    </div>

    <div *ngIf="outputText">
      <p>{{ outputText }}</p>
    </div>
  `,
  providers: [ModerationsService]
})
export class ModerationsComponent {
  prompt = '';
  outputText = ''; 

  constructor(private moderationsService: ModerationsService) {}

  onSubmit(): void {
    this.moderateText(this.prompt);
  }

  moderateText(prompt: string) {
    this.moderationsService.moderateText(prompt).subscribe((response: any) => {
      this.outputText = response.choices[0].text.trim();
    });
  }
}


