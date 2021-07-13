import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  donation : number = 0;
  constructor() { }
  donateMore(){
    this.donation += 10;
  }
  ngOnInit(): void {
  }

}
