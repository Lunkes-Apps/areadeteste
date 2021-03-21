import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lnks-input-options',
  templateUrl: './input-options.component.html',
  styleUrls: ['./input-options.component.scss']
})
export class InputOptionsComponent implements OnInit {

  @Input()label: string;
  @Input()for: string;
  @Input()type: string;
  @Input()itens: string[];
  @Input()text: string = "";
  @Output()valueOut = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitirEvent(){    
    this.valueOut.emit(this.text);
    console.log("changed no input options");
  }

}
