import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesGenerationService {

  constructor(private http: HttpClient) { }

  generateImage(prompt: string): Observable<any> {
    const url = 'https://api.openai.com/v1/images/generations';
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer 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');

    const requestBody = {
      'model': 'image-alpha-001',
      'prompt': prompt,
      'num_images': 1,
      'size': '1024x1024',
      'response_format': 'url'
    };

    return this.http.post(url, requestBody, { headers: headers });
  }
}

