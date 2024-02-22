import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChackoutPage } from './chackout.page';

describe('ChackoutPage', () => {
  let component: ChackoutPage;
  let fixture: ComponentFixture<ChackoutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChackoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
