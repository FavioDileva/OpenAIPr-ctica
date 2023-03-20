import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Textdavinciedit001Service {

  constructor(private http: HttpClient) { }

  generateText(prompt: string): Observable<any> {
    const url = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer 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');

    const requestBody = {
      'prompt': prompt,
      'max_tokens': 1024,
      'temperature': 0.5,
      'n': 1,
      'stop': '\n'
    };

    return this.http.post(url, requestBody, { headers: headers });
  }
}



