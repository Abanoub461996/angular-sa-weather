import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp101Component } from './comp101.component';

describe('Comp101Component', () => {
  let component: Comp101Component;
  let fixture: ComponentFixture<Comp101Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Comp101Component]
    });
    fixture = TestBed.createComponent(Comp101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
