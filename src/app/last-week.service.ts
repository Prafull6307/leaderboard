import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LastWeekService {

  private apiUrl = 'https://leaderboard-4.onrender.com/last-week-leaderboard';

  constructor(private http: HttpClient) { }

  getLeaderboard(country: string): Observable<any> {
    const params = new HttpParams().set('country', country);
    return this.http.get(this.apiUrl, { params });
  }
}