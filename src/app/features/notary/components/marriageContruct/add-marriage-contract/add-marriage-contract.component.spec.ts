import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarriageContractComponent } from './add-marriage-contract.component';

describe('AddMarriageContractComponent', () => {
  let component: AddMarriageContractComponent;
  let fixture: ComponentFixture<AddMarriageContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMarriageContractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMarriageContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
