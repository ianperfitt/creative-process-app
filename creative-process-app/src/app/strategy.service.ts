import { Injectable } from '@angular/core';
import { strategies } from './strategies';

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  constructor() { }

  getStrategies() {
    return strategies;
  }
}
