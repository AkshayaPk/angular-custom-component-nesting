import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  showSecret = false;
  log = [];

  onToggleDisplay(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
