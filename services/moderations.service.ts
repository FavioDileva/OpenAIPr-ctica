import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModerationsService {

  constructor(private http: HttpClient) { }

  moderateText(prompt: string): Observable<any> {
    const url = 'https://api.openai.com/v1/moderations';

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer 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');

    const requestBody = {
      'model': 'content-filter-alpha-1',
      'prompt': prompt,
      'response_format': 'text'
    };

    return this.http.post(url, requestBody, { headers: headers });
  }
}


