import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloUsuarioComponent } from './articulo-usuario.component';

describe('ArticuloUsuarioComponent', () => {
  let component: ArticuloUsuarioComponent;
  let fixture: ComponentFixture<ArticuloUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
