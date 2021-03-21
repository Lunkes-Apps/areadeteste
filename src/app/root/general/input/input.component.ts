import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lnks-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input()label: string;
  @Input()for: string;
  @Input()type: string;
  @Input()value: string = "";
  @Output()valueOut = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

}
