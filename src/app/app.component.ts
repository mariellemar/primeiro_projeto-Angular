import { Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
/*DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked */
@Component({
  selector: 'app-root',
  template: `
  <!--
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <app-data-biding></app-data-biding> 
  -->
  <app-diretivas-atributos></app-diretivas-atributos>
  <router-outlet></router-outlet>`
})

export class AppComponent implements OnInit{
  
  constructor() { }

  ngOnInit(): void {  }

}