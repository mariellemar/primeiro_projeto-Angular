import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {


  public valor: boolean = true;
  public altura: string = "20px";
  public backgroundColor: string = "pink";

  public nome: string = "";
  public list: Array <{ nome: string }> =[{nome: "Mari"}, {nome: "Sabrina"}];

  public date: Date = new Date()
  constructor() { }

  ngOnInit(): void {

    setInterval( ()=> {
      if (this.valor) {
        this.valor = false;
      } else {
        this.valor = true;
      }

      if (this.altura == "20px") {
        this.altura = "50px";
        this.backgroundColor = "yellow";
      } else {
        this.altura = "20px";
        this.backgroundColor = "pink";
      }
    },2000)    
  }

  public salvar() {
    this.list.push({ nome: this.nome});
    this.nome ="";
  }

}
