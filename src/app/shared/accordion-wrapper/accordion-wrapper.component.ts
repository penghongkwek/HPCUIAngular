import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AccordionHeaderModel } from './accordion-wrapper.model';

@Component({
  selector: 'app-accordion-wrapper',
  templateUrl: './accordion-wrapper.component.html',
  styleUrls: ['./accordion-wrapper.component.scss']
})
export class AccordionWrapperComponent implements OnInit {

  @Input() header: AccordionHeaderModel;

  constructor() { }

  ngOnInit() {
  }

}
