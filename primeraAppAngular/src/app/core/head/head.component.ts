import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vwn-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  //definimos las variables
  titulo : string;
  logo : string;
  constructor() { 
    this.titulo = 'Curso Angular 11 para ViewNext',
    this.logo = '../../assets/logo/logo.svg'
  }

  ngOnInit(): void {
  }

}
