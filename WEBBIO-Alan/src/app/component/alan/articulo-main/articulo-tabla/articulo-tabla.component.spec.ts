import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloTablaComponent } from './articulo-tabla.component';

describe('ArticuloTablaComponent', () => {
  let component: ArticuloTablaComponent;
  let fixture: ComponentFixture<ArticuloTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
