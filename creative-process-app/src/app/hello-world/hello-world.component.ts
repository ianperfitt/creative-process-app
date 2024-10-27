import { Component, OnInit } from '@angular/core';
import { StrategyService } from '../strategy.service';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.scss'
})
export class HelloWorldComponent implements OnInit{

  strategies : string[] = [];
  currentStrategy : string = "";

  constructor(private strategyService : StrategyService) {}

  ngOnInit(): void {
    this.strategies = this.strategyService.getStrategies();
  }

  getRandomIndex(min : number, max : number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  generateStrategy() {
    let index = this.getRandomIndex(0, this.strategies.length - 1);
    this.currentStrategy =  this.strategies[index];
  }


}