import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  info = {
    year: '',
    minTemp: '',
    maxTemp: '',
    avgTemp: '',
    pcp: '',
    rate: ''
  };
  constructor() { }

  ngOnInit(): void {
  }
  sendInfo(): void {
    const data = {
      'infoDto' : {
      rate : this.info.rate,
      year: this.info.year,
      minTemp: this.info.minTemp,
      maxTemp: this.info.maxTemp,
      avgTemp: this.info.avgTemp,
      pcp: this.info.pcp}
  }
}

}
