import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaMainComponent } from './estadistica-main.component';

describe('EstadisticaMainComponent', () => {
  let component: EstadisticaMainComponent;
  let fixture: ComponentFixture<EstadisticaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
