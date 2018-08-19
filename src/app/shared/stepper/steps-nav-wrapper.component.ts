import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { StepsNavWrapperModel } from './steps-nav-wrapper.model';

@Component({
  selector: 'app-steps-nav-wrapper',
  templateUrl: './steps-nav-wrapper.component.html'
})
export class StepsNavWrapperComponent implements OnInit {

  @Input() steps: StepsNavWrapperModel[];
  @Output() clickEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
