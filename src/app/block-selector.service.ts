import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class BlockSelectorService {

  constructor(private http: HttpClient) { 

  } 

  public serveURL: string = "http://127.0.0.1:8000";

  public getBlockSelected(color: string) {
    const api = '/BlockSelector/getBlockSelected/';
    const blockColor = color;
    const params = `color=${blockColor}`;
    const lowercaseUrlApi = `${this.serveURL}${api}`.toLowerCase();
    //const fullApiUrl = `${lowercaseUrlApi}?${params}/`;
    const fullApiUrl = `${lowercaseUrlApi}`;
    return this.http.get<any>(`${fullApiUrl}`, {withCredentials:true}); 
  }
}
