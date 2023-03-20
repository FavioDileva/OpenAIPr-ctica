import { Component } from '@angular/core';
import { ImagesGenerationService } from 'services/images-generation.service';

@Component({
  selector: 'app-image-generator',
  template: `
    <div>
      <h1>HELLO</h1>
      <form (submit)="onSubmit()">
        <label for="prompt">Prompt:</label>
        <input type="text" id="prompt" [(ngModel)]="prompt" name="prompt">
        <button type="submit">Generate Image</button>
      </form>
    </div>

    <div *ngIf="imageUrl">
      <img [src]="imageUrl" alt="Generated Image">
    </div>
  `,
  providers: [ImagesGenerationService]
})
export class ImagesGenerationComponent {
  prompt = '';
  imageUrl = ''; 

  constructor(private imagesGenerationService: ImagesGenerationService) {}

  onSubmit(): void {
    this.generateImage(this.prompt);
  }

  generateImage(prompt: string) {
    this.imagesGenerationService.generateImage(prompt).subscribe((response: any) => {
      this.imageUrl = response.data[0].url;
    });
  }
}

