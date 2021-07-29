import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormClientComponent } from './product-form-client.component';

describe('ProductFormClientComponent', () => {
  let component: ProductFormClientComponent;
  let fixture: ComponentFixture<ProductFormClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
