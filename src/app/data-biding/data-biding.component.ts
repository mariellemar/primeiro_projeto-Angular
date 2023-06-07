import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {
  
  public nome:string = "Mari"
  public idade:number = 19


  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://www.w3schools.com/images/w3schools_green.jpg"
  public imgTitle:string = "Property binding"
  public imgAlt: string = "W3Schools.com"

  public position: {x: number, y: number} = {x: 0, y: 0};

  constructor() { }
  
  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }
  public mouseMoveTeste(valor:MouseEvent) {
    this.position.y = valor.offsetX;
    this.position.x = valor.offsetY;
  }

  ngOnInit(): void {
  }

}
