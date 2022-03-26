import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlockSelectorService {

  constructor(@Inject('BASE URL') private serveURL: string, private http: HttpClient) { 

  }

  public getBlockSelected(color: string) {
    const api = 'api/BlockSelector/getBlockSelected';
    const blockColor = color;
    const params = `blockColor=${blockColor}`;
    const lowercaseUrlApi = `${this.serveURL}${api}`.toLowerCase();
    const fullApiUrl = `${lowercaseUrlApi}?${params}`;

    return this.http.get<String>(`${fullApiUrl}`); 
  }
}
