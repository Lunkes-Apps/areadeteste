import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lnks-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {
  @Input() labelbt: string;
  @Input() url: string;

  constructor() { }

  ngOnInit(): void {
  }

}
