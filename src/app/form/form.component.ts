import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormItemComponent, NzFormControlComponent, NzFormDirective } from 'ng-zorro-antd/form';
import { JsonPipe, NgIf } from '@angular/common';
import { CustomValidator } from '../validators/custom.validators';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NzInputModule, NzFormItemComponent, NzFormControlComponent, NzFormDirective, ReactiveFormsModule, NzButtonModule, NgIf, JsonPipe ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit  {
  form!: FormGroup;
  showValues: boolean = false

  ngOnInit(): void {
      this.form = new FormGroup({
        userName: new FormControl('', [Validators.required, Validators.minLength(6)]),
        password: new FormControl('', Validators.required),
        common: new FormGroup({
          email: new FormControl('', [Validators.required, Validators.minLength(6), CustomValidator.showEmails], [CustomValidator.showAsyncEmails()]),
        })
      })
      this.form.patchValue({common: {email: 'test@test.mail'} })
      
  }

  handleShowValue(e: Event){
    this.showValues = !this.showValues
  }
  handleClearForm(){
    this.form.reset()
  }
  submitForm(): void {
    console.log('submit', {...this.form.value });
  }

  constructor(private fb: NonNullableFormBuilder) {}
}
