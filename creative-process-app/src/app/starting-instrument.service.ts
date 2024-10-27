import { Injectable } from '@angular/core';
import { instruments } from './instruments';

@Injectable({
  providedIn: 'root'
})
export class StartingInstrumentService {

  constructor() { }

  getInstruments() : string[] {
    return instruments;
  }
}
