import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

export abstract class AbstractFormComponent {

  addFormGroupToFormArray(formArray: FormArray, formGroup: FormGroup): void {
    if (formArray) {
        formArray.push(formGroup);
    }
  }

  deleteFormGroupFromFromArray(formArray: FormArray, idx: number): void {
    if (formArray) {
        formArray.removeAt(idx);
    }
  }

  clearFormArray(formArray: FormArray): void {
    if (formArray) {
      while (formArray.length !== 0) {
          formArray.removeAt(0);
      }
    }
  }

  resetForm(form: FormGroup) {
    form.reset();
  }

  onSubmit(form: FormGroup) {
    if (!form.valid) {
      return;
    }
  }

  isValid(form: FormGroup): boolean {
    if (!form.valid) {
      return false;
    }
    return true;
  }
}
