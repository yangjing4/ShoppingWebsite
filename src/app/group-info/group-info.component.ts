import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
export class GroupInfoComponent implements OnInit {
  person1: string;
  person2: string;
  person3: string;
  person4: string;

  constructor() {
    this.person1 = '/assets/person1.jpg';
    this.person2 = '/assets/person2.jpg';
    this.person3 = '/assets/person3.jpg';
    this.person4 = '/assets/person4.jpg';
  }
  ngOnInit() {
  }

}
