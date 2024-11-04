import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { HospitalService } from './../../core/constant/services/hospital.service';

@Component({
  selector: 'app-new-hospital',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './new-hospital.component.html',
  styleUrl: './new-hospital.component.scss'
})
export class NewHospitalComponent implements OnInit {
  isLinear = false;
  hospitalForm!: FormGroup;
  constructor(private fb: FormBuilder, private _HospitalService: HospitalService) { }
  ngOnInit(): void {
    this.hospitalForm = this.fb.group({
      hospitalId: [''],
      hospitalName: [''],
      hospitalContactNo: [''],
      hospitalOwnerName: [''],
      hospitalOwnerContactNo: [''],
      hospitalEmailId: [''],
      hospitalCity: [''],
      hospitalAddress: [''],
      userName: [''],
      password: ['']
    });
  }
  onSubmit() {
    this.hospitalForm.get('hospitalId')?.setValue(Math.floor(Math.random() * 10).toString())
    console.log(this.hospitalForm);

    this._HospitalService.registerHospital(this.hospitalForm.value).subscribe({
      next: (res) => {
        console.log(res);
      }
    })

  }
  onReset() {

  }
}
