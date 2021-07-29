import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioFormComponent } from './negocio-form.component';

describe('NegocioFormComponent', () => {
  let component: NegocioFormComponent;
  let fixture: ComponentFixture<NegocioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegocioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegocioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
