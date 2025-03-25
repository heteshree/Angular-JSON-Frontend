import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private jsonUrl = 'assets/data.json';

  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get<any>(this.jsonUrl);
  }
}
