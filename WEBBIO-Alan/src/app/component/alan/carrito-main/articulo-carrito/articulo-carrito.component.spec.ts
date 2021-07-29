import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloCarritoComponent } from './articulo-carrito.component';

describe('ArticuloCarritoComponent', () => {
  let component: ArticuloCarritoComponent;
  let fixture: ComponentFixture<ArticuloCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
