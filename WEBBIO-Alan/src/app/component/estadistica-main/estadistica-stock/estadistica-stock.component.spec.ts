import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaStockComponent } from './estadistica-stock.component';

describe('EstadisticaStockComponent', () => {
  let component: EstadisticaStockComponent;
  let fixture: ComponentFixture<EstadisticaStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
