import { Component } from '@angular/core';
import { NewHospitalComponent } from '../new-hospital/new-hospital.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NewHospitalComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor() { }
  ngOnInit(): void {  

  }

}
