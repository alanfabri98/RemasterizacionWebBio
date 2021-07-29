import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaCantidadComponent } from './venta-cantidad.component';

describe('VentaCantidadComponent', () => {
  let component: VentaCantidadComponent;
  let fixture: ComponentFixture<VentaCantidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaCantidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaCantidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
