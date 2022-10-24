import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  resps : any;
  info = {
    year: '',
    min_temp : '',
    max_temp : '',
    avg_temp : '',
    pcp: '',
    crime_type : '',
  };
  states = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY']
//    states = [
//     {id: 1, name: 'AK'},{id: 2, name: 'AL'},{id: 3, name: 'AR'},{id: 4, name: 'AZ'},{id: 5, name: 'CA'},
//     {id: 6, name: 'CO'},{id: 7, name: 'CT'},{id: 8, name: 'DE'},{id: 9, name: 'FL'},{id: 10, name: 'GA'},

//     {id: 11, name: 'HI'},{id: 12, name: 'IA'},{id: 13, name: 'ID'},{id: 14, name: 'IL'},{id: 15, name: 'IN'},
//     {id: 16, name: 'KS'},{id: 17, name: 'KY'},{id: 18, name: 'LA'},{id: 19, name: 'MA'},{id: 20, name: 'MD'},

//     {id: 21, name: 'ME'},{id: 22, name: 'MI'},{id: 23, name: 'MN'},{id: 24, name: 'MO'},{id: 25, name: 'MS'},
//     {id: 26, name: 'MT'},{id: 27, name: 'NC'},{id: 28, name: 'ND'},{id: 29, name: 'NE'},{id: 30, name: 'NH'},

//     {id: 31, name: 'NJ'},{id: 32, name: 'NM'},{id: 33, name: 'NV'},{id: 34, name: 'NY'},{id: 35, name: 'OH'},
//     {id: 36, name: 'OK'},{id: 37, name: 'OR'},{id: 38, name: 'PA'},{id: 39, name: 'RI'},{id: 40, name: 'SC'},

//     {id: 41, name: 'SD'},{id: 42, name: 'TN'},{id: 43, name: 'TX'},{id: 44, name: 'UT'},{id: 45, name: 'VA'},
//     {id: 46, name: 'VT'},{id: 47, name: 'WA'},{id: 48, name: 'WI'},{id: 49, name: 'WV'},{id: 50, name: 'WY'},
    
// ];

// '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
  // resp ={
  //   state: '',
  //   R2: '',
  //   prediction: ''
  // }

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
  }

  getInfo(): void {
    this.infoService.get(this.info.year,this.info.crime_type,this.info.avg_temp,this.info.min_temp,this.info.max_temp,this.info.pcp)
    .subscribe(
      data => {
        this.resps = data;
        console.log(this.resps)
      },
      error => {
        console.log(error);
      });
  }
  
}
