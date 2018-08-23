import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { AccordionHeaderModel } from '../../../shared/public_api';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  panel: AccordionHeaderModel;

  constructor() { }

  ngOnInit() {
    this.panel = {title: 'Review'};
  }

}
