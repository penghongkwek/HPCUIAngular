import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

import { AbstractFormComponent } from '../abstract-form-component';

import { AccordionHeaderModel } from '../../../shared/public_api';
import {
  PANELS,
  JobSettings,
  QESettings,
  OFSettings,
  BaseLSSettings,
  APPLICATIONS,
  JobSettingsLabels
} from '../../models/index';

import {
  QEFormModel,
  OFFormModel,
  NoneFormModel,
  BWAFormModel,
  GATKFormModel,
  TabletFormModel
} from './job-settings.formModel';

import { CreateJobDataService } from '../../pages/create-job.dataservice';
import { AuthService } from '../../../core/services/auth.service';

import { BreadcrumbProvider } from '../../../providers/breadcrumb.providers';
import { JobSettingsProvider } from '../../../providers/jobsettings.providers';

@Component({
  selector: 'app-job-settings',
  templateUrl: './job-settings.component.html',
  styleUrls: ['./job-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ JobSettingsProvider ]
})
export class JobSettingsComponent extends AbstractFormComponent implements OnInit {

  dummyWorkDirectory = '/home/dummyUser';

  jobSettingsLabels;
  appSpecificSettings;

  jobSettings: JobSettings;
  jobSettingsForm: FormGroup;

  rawApplications: any;
  applications: string[];
  softwares: string[];
  priorities: string[];
  siteList: string[];

  panels: AccordionHeaderModel[];

  constructor(
    private _fb: FormBuilder,
    private _createJobDS: CreateJobDataService,
    private _authService: AuthService,
    private _router: Router,
    private breadcrumbProvider: BreadcrumbProvider,
    private jobsettingsProvider: JobSettingsProvider,
    private _route: ActivatedRoute
  ) {
    super();
  }

  get isLifeScience(): boolean {
    return this._isLifeScience;
  }

  set isLifeScience(status: boolean) {
    this._isLifeScience = status;
  }

  private _isLifeScience: boolean;

  get selectedApp(): string {
    return this._selectedApp;
  }

  set selectedApp(value: string) {
    this._selectedApp = value;
  }

  private _selectedApp: string;

  get appSpecificAccordion(): AccordionHeaderModel {
    return this._appSpecificAccordion;
  }

  set appSpecificAccordion(value: AccordionHeaderModel) {
    this._appSpecificAccordion = value;
  }

  private _appSpecificAccordion: AccordionHeaderModel;

  get appSpecificSettingsFormArray(): FormArray {
    let fg = <FormGroup> this.jobSettingsForm.controls['app'];
    return <FormArray> fg.controls['settings'];
  }

  ngOnInit() {

    this.jobsettingsProvider.getNameByUrl(this._route.snapshot.params.name)
      .then(name => this.breadcrumbProvider.addItem(name));

    this.jobSettings = this._createJobDS.getJobSettings();

    this.jobSettingsForm = this.createForm(this.jobSettings);
    this.jobSettingsLabels = JobSettingsLabels;

    this._route.data.subscribe((data: {sites: string[], priorities: string[], apps: any}) => {
      this.siteList = data.sites;
      this.priorities = data.priorities;
      this.rawApplications = data.apps;
      this.applications = Object.keys(data.apps).map(key => {
        return data.apps[key].name;
      });
      this.softwares = Object.keys(data.apps.LIFESCIENCE.softwares).map(key => {
        return data.apps.LIFESCIENCE.softwares[key];
      });
    });

    this.panels = Object.keys(PANELS).map((key, index) => {
      return {title: PANELS[key], expanded: (index === 0) ? true : false};
    });


    this.populateFormMockedData();
    this.onAppSpecificSettingsFAChanges();
  }

  getLifeScienceHeader(idx: number): AccordionHeaderModel {
    return {
      title: 'Stage ' + `${++idx}`,
      expanded: true
    };
  }

  createForm(jobSettings: JobSettings): FormGroup {
    return this._fb.group({
      name: [jobSettings.name],
      priority: [jobSettings.priority],
      configpath: [jobSettings.configpath],
      sites: [jobSettings.sites],
      app: this._fb.group({
        name: [jobSettings.app.name],
        settings: this._fb.array([])
      }),
      walltime: [jobSettings.walltime],
      outputfile: [jobSettings.outputfile],
      errorfile: [jobSettings.errorfile],
      customscript: [jobSettings.customscript]
    });
  }

  populateFormMockedData(): void {
    this.jobSettingsForm.patchValue({
      name: 'Chemical Analysis',
      priority: 'Priority 1',
      configpath: '',
      sites: ['Singapore', 'Japan'],
      app: {
        name: 'OpenFOAM'
      },
      walltime: '72:00:00',
      outputfile: 'output.out',
      errorfile: 'error.out',
      customscript: 'this is a custom script\nlet it run'
    });

    this.selectedApp = this.applications[1];

    this.addAppSpecificSettings();
  }

  populateBasicSettings(form: FormGroup): void {
    form.patchValue({
      name: 'Chemical Analysis',
      priority: 'Priority 1',
      configpath: '',
      sites: ['Singapore', 'Japan'],
      app: {
        name: 'OpenFOAM'
      },
      walltime: '72:00:00'
    });
  }

  populateAppSpecificSettings(): void {
    this.addAppSpecificSettings();
  }

  populateAdditionalSettings(form: FormGroup): void {
    form.patchValue({
      outputfile: 'output.out',
      errorfile: 'error.out',
      customscript: 'this is a custom script\nlet it run'
    });
  }

  addAppSpecificSettings(): void {
    const fg = this.buildAppSpecificSettingsForm();
    this.addFormGroupToFormArray(this.appSpecificSettingsFormArray, fg);
  }

  deleteAppSpecificSettings(idx: number): void {
    this.deleteFormGroupFromFromArray(this.appSpecificSettingsFormArray, idx);
  }

  buildAppSpecificSettingsForm(): FormGroup {
    if (!this.selectedApp) {
      this.appSpecificSettings = {};
      return this._fb.group({});
    }

    if (this.selectedApp === this.rawApplications.QUANTUMEXPRESSO.name) {
      return this.createQESetting();
    } else if (this.selectedApp === this.rawApplications.OPENFOAM.name) {
      return this.createOFSetting();
    } else if (this.selectedApp === this.rawApplications.LIFESCIENCE.name) {
      return this.createLSSetting();
    } else {
      this.appSpecificSettings = {};
      return this._fb.group({});
    }
  }

  addSoftwareSpecificSettings(): void {
  }

  createQESetting(): FormGroup {
    let qeSettings = new QESettings();

    this.appSpecificSettings = QEFormModel;
    return this._fb.group({
      inputs: [qeSettings.inputs],
      pseudopath: [qeSettings.pseudopath],
      outputpath: [qeSettings.outputpath]
    });
  }

  createOFSetting(): FormGroup {
    let ofSettings = new OFSettings();

    this.appSpecificSettings = OFFormModel;
    return this._fb.group({
      inputs: [ofSettings.inputs]
    });
  }

  createLSSetting(): FormGroup {
    let lsSettings = new BaseLSSettings();

    this.appSpecificSettings = NoneFormModel;
    return this._fb.group({
      software: [lsSettings.software],
    });
  }

  onAppChange(app): any {
    this.selectedApp = app.value;

    this._isLifeScience = (this.selectedApp === APPLICATIONS.LIFESCIENCE.name) ? true : false;
    this.clearFormArray(this.appSpecificSettingsFormArray);
    this.jobSettingsForm.controls['app'].patchValue({
      'name': app.value,
    });

    this.addAppSpecificSettings();
  }

  onAppSpecificSettingsFAChanges(): void {
    // this.appSpecificSettingsFormArray.valueChanges.subscribe(val => {
    //   console.log(val);
    // });

    // this.appSpecificSettingsFormArray.controls.forEach((element, index) => {
    //   element.valueChanges.subscribe(val => {
    //     console.log(index);
    //     console.log(val);
    //   });
    // });
  }

  onSoftwareChange(software: any, index: number): void {
    if (software.value !== APPLICATIONS.LIFESCIENCE.softwares.NONE) {
      this.addAppSpecificSettings();
    }  else {   // remove block from AppSpecificSettingsFA

    }
  }

  onBrowseClickHandler(event) {
  }

  onNext() {
    // validations

    // set job settings object from the forms
    const modified_formValue = {
      ...this.jobSettingsForm.value,
      userid: this._authService.getUserInfo(),
      workdirectory: this.dummyWorkDirectory
    };

    if (this.isValid) {
      this._createJobDS.setBaseSettings(modified_formValue);
      this._createJobDS.setJobSettings(modified_formValue);
      this._router.navigate(['../recommendations'], {relativeTo: this._route});
    }
  }
}
