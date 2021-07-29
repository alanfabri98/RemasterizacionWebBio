import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaStockComponent } from './venta-stock.component';

describe('VentaStockComponent', () => {
  let component: VentaStockComponent;
  let fixture: ComponentFixture<VentaStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
