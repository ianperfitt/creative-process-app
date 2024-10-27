import { Component } from '@angular/core';
import { StartingInstrumentService } from '../starting-instrument.service';

@Component({
  selector: 'starting-instrument',
  templateUrl: './starting-instrument.component.html',
  styleUrl: './starting-instrument.component.scss'
})
export class StartingInstrumentComponent {

  startingInstrument : string = "";
  instruments : string[] = [];

  constructor(private startingInstrumentService : StartingInstrumentService) {}

  ngOnInit(): void {
    this.instruments = this.startingInstrumentService.getInstruments();
  }

  chooseStartingInstrument() {
    let index = this.getRandomIndex(0, this.instruments.length - 1);
    this.startingInstrument =  this.instruments[index];
  }

  getRandomIndex(min : number, max : number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}