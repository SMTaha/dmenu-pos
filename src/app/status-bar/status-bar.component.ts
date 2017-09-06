import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {
  @Input()
  tableNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
