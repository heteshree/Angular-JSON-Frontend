import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

private apiUrl = 'https://localhost:7244/api/Data';

  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get<any>(this.apiUrl).pipe(
      tap(response => console.log("API Response:", response)) // Add this for debugging
    );
  }
  saveData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}

