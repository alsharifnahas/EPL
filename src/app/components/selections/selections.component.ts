import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selections',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.css']
})
export class SelectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hoverOver(e): void {
    e.target.style.transition = "0.5s";
    e.target.style.borderRadius = "5%";
    e.target.style.filter = "grayscale(0)";
    e.target.style.cursor = "pointer";

  }
  hoverOut(e): void {
    e.target.style.borderRadius = "0";
    e.target.style.filter = "grayscale(100%)";
  }

}
