import {
  Component,
  OnInit,
  AfterContentInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-specific-form',
  templateUrl: './app-specific-form.component.html',
  styleUrls: ['./app-specific-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSpecificFormComponent implements OnInit, OnChanges, AfterContentInit {

  @Input()
  get appSpecificSettings() {
    return this._appSpecificSettings;
  }

  set appSpecificSettings(value: any) {
    if (value) {
      this._appSpecificSettings = value;
      this._cdr.markForCheck();
    }
  }
  private _appSpecificSettings: any;

  @Input()
  get appSpecificFormGroup() {
    return this._appSpecificFormGroup;
  }

  set appSpecificFormGroup(value: FormGroup) {
    if (value) {
      this._appSpecificFormGroup = value;
      this._cdr.markForCheck();
    }
  }
  private _appSpecificFormGroup: FormGroup;

  @Input() parentForm: FormGroup;

  objectProps: Object;

  constructor(private _cdr: ChangeDetectorRef, private _fb: FormBuilder) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (this.appSpecificSettings && this.appSpecificFormGroup.controls) {
      this.objectProps = Object.keys(this.appSpecificSettings)
      .map(prop => {
        this.appSpecificFormGroup.controls[prop].patchValue(this.appSpecificSettings[prop].value || '');
        return Object.assign({}, {key: prop}, this.appSpecificSettings[prop]);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  onClickHandler(event): void {
    console.log(event);
  }
}
