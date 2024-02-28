import { Component,OnInit } from '@angular/core';
import { LastWeekService } from '../last-week.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-last-w-scorecard',
  templateUrl: './last-w-scorecard.component.html',
  styleUrl: './last-w-scorecard.component.css'
})
export class LastWScorecardComponent implements OnInit {
  loading = false;
  leaderboard: any;
  ngOnInit(): void {
  }

  constructor(private http: HttpClient) {
   
    };
    onSubmit(event:Event,country: string) {
      event.preventDefault()
      this.loading=true;
      this.http.get(`https://leaderboard-4.onrender.com/last-week-leaderboard?country=${country}`).subscribe(data => {
        this.leaderboard = data;
        this.loading=false;
      });
    }
  }


