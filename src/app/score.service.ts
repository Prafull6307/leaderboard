import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http:HttpClient) { }
  getData(){
    let url="https://leaderboard-4.onrender.com/score_card";
    return this.http.get(url);
  }
}
