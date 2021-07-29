import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaCompraComponent } from './estadistica-compra.component';

describe('EstadisticaCompraComponent', () => {
  let component: EstadisticaCompraComponent;
  let fixture: ComponentFixture<EstadisticaCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
