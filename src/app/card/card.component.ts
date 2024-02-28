import { Component } from '@angular/core';
import { ScoreService } from '../score.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  data:any;
  constructor(private score:ScoreService){
    this.score.getData().subscribe(data=>{
      this.data=data;
    })
  }

}
