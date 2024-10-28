import { Component, OnInit } from '@angular/core';
import { StyleService } from '../style.service';

@Component({
  selector: 'style-component',
  templateUrl: './style.component.html',
  styleUrl: './style.component.scss'
})
export class StyleComponent implements OnInit{

  styles : string[] = [];

  constructor(private styleService : StyleService) {}

  ngOnInit(): void {
    this.styles = this.styleService.getStyles();
  }

}
