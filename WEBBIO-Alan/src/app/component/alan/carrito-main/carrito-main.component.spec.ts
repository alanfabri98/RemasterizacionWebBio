import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoMainComponent } from './carrito-main.component';

describe('CarritoMainComponent', () => {
  let component: CarritoMainComponent;
  let fixture: ComponentFixture<CarritoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
