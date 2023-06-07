import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {


  public condition: boolean = true;
  public conditionClick: boolean = true;


  public list: Array<{ nome: string, idade: number}> = [
    { nome: "Mari", idade: 19},
    { nome: "Sabrina", idade: 20}];

  public nome: string = 'mari'

  constructor() { }

  ngOnInit(): void {

    setInterval( ()=> {
      if (this.condition) {
        this.condition = false;   
      } else {
        this.condition = true;
      }
 
    }, 2000)
  }

  public onClick() {
    if (this.conditionClick) {
      this.condition = false;
    } else {
      this.condition = true;
    }
  }

  public onClickAddList() {
    this.list.push({nome: "Julia", idade: 21})
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1)
  }

}
