import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUserFormComponent } from './product-user-form.component';

describe('ProductUserFormComponent', () => {
  let component: ProductUserFormComponent;
  let fixture: ComponentFixture<ProductUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
