import { Component, OnInit } from '@angular/core';
import { StrategyService } from '../strategy.service';

@Component({
  selector: 'oblique-strategy',
  templateUrl: './oblique-strategy.component.html',
  styleUrl: './oblique-strategy.component.scss'
})
export class ObliqueStrategyComponent implements OnInit{

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