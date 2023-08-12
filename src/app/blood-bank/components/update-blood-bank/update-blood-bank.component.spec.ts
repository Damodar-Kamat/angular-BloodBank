import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBloodBankComponent } from './update-blood-bank.component';

describe('UpdateBloodBankComponent', () => {
  let component: UpdateBloodBankComponent;
  let fixture: ComponentFixture<UpdateBloodBankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBloodBankComponent]
    });
    fixture = TestBed.createComponent(UpdateBloodBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
