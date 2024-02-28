// user-rank.component.ts

import { Component } from '@angular/core';
import { LeaderboardService } from '../leaderboard.service';

@Component({
  selector: 'app-user-rank',
  templateUrl: './user-rank.component.html',
  styleUrls: ['./user-rank.component.css']
})
export class UserRankComponent {
  uid: string = ''; // Providing default value
  userRank: any;

  constructor(private leaderboardService: LeaderboardService) { }

  getUserRank(): void {
    this.leaderboardService.getUserRank(this.uid)
      .subscribe(data => {
        this.userRank = data;
      });
  }
}
