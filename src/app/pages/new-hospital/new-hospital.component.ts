import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
MatButtonModule
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
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.hospitalForm = this.fb.group({
      hospitalName: [''],
      contactNo: [''],
      ownerName: [''],
      ownerContactNo: [''],
      ownerEmailId: [''],
      city: [''],
      address: [''],
      userName: [''],
      password: ['']
    });
  }
  onSubmit() {

  }
  onReset() {

  }
}
