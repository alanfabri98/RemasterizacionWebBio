import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloMainComponent } from './articulo-main.component';

describe('ArticuloMainComponent', () => {
  let component: ArticuloMainComponent;
  let fixture: ComponentFixture<ArticuloMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
