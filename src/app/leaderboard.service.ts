// leaderboard.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) { }

  getUserRank(uid: string): Observable<any> {
    return this.http.get<any>(`https://leaderboard-4.onrender.com/user-rank/${uid}`);
  }
}
