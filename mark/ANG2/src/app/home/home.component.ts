import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  donation : number = 0;

addCar = new FormGroup ({
  brand : new FormControl(""),
  type : new FormControl(""),
  pic : new FormControl("")

});

    cars = [{
      brand: "Mercedes",
      type: "SL 4",
      pic: "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220__340.jpg"
    },{
      brand: "Tesla",
      type: "Model S Plaid",
      pic: "https://cdn.pixabay.com/photo/2016/02/19/11/44/car-1209912__340.jpg"
    },{
      brand: "Porsche",
      type: "Carrera Turbo S",
      pic: "https://cdn.pixabay.com/photo/2020/10/18/16/45/porsche-5665390__340.jpg"
    }]

  constructor() { }

  donateMore(){
    this.donation += 10;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    let a = this.addCar.value;
    this.cars.push(a);
    this.addCar.reset();
  }
}
