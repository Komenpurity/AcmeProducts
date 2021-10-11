import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  cropWidth: number = 75
  rating: number = 4;

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
  }

}
