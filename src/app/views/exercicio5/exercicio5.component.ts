import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio5',
  templateUrl: './exercicio5.component.html',
  styleUrls: ['./exercicio5.component.css']
})
export class Exercicio5Component implements OnInit {

  inp1: number;
  inp2: number;


  nomeCachorro: string;


  constructor() { }

  ngOnInit(): void {
  }

  somar(inp1, inp2){
    return inp1 + inp2;
  }

}
