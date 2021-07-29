import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemClientComponent } from './product-item-client.component';

describe('ProductItemClientComponent', () => {
  let component: ProductItemClientComponent;
  let fixture: ComponentFixture<ProductItemClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
