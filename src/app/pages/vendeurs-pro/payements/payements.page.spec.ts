import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayementsPage } from './payements.page';

describe('PayementsPage', () => {
  let component: PayementsPage;
  let fixture: ComponentFixture<PayementsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PayementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
