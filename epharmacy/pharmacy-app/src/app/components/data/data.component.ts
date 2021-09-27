import { Component, OnInit } from '@angular/core';
import demodata from '../../drugs.json';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',

  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  title = 'Angular Example';
  drugs: any = demodata;
  headElements = ['Name Of Drugs', 'Dugs Id'];
  constructor() { }

  ngOnInit() {

  }
}
