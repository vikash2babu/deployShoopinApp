import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDialogeComponent } from './sale-dialoge.component';

describe('SaleDialogeComponent', () => {
  let component: SaleDialogeComponent;
  let fixture: ComponentFixture<SaleDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleDialogeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
