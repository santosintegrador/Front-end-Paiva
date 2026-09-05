import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex10 } from './ex10';

declare const describe: any;
declare const beforeEach: any;
declare const it: any;
declare const expect: any;

describe('Ex10', () => {
  let component: Ex10;
  let fixture: ComponentFixture<Ex10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex10],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
