import { Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import { AnyARecord } from 'dns';
/*DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked */
@Component({
  selector: 'app-root',
  template: `
  <!--
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <app-data-biding></app-data-biding> 
  -->

  <!--
  <h1>Aulas de diretivas atributo</h1>
  <hr> 
  <app-diretivas-atributos></app-diretivas-atributos>
  -->

  <!--
  <app-new-component></app-new-component>
  -->
  <!--
  <app-input [contador]="addValue"></app-input>
  <br>
  <button (click)="add()"> Add </button>
  -->

  <!--
  <ng-template [ngIf] = "getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output>
  -->

  <!--
  <app-food-add></app-food-add>
  <app-food-list></app-food-list>
  -->

  <app-forms></app-forms>

  <router-outlet></router-outlet>`
})

export class AppComponent implements OnInit{
  public destruir: boolean = true;

  public addValue: number = 10;

  public getDados: {nome:string, idade:number} | undefined;
  constructor() { }

  ngOnInit(): void {  }

  public add() {
    this.addValue += 1;
  }

  public destruirComponent() {
    this.destruir = false;
  }

  public setDados(event: any) {
    this.getDados = event
  }

}