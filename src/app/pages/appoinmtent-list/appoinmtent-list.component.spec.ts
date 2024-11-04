import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmtentListComponent } from './appoinmtent-list.component';

describe('AppoinmtentListComponent', () => {
  let component: AppoinmtentListComponent;
  let fixture: ComponentFixture<AppoinmtentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppoinmtentListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppoinmtentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
