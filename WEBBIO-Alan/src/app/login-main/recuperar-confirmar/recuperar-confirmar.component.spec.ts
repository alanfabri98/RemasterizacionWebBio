import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarConfirmarComponent } from './recuperar-confirmar.component';

describe('RecuperarConfirmarComponent', () => {
  let component: RecuperarConfirmarComponent;
  let fixture: ComponentFixture<RecuperarConfirmarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarConfirmarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarConfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
