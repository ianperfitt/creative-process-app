import { Injectable } from '@angular/core';
import { styles } from './styles';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }

  getStyles(): string[] {
    return styles;
  }
}
