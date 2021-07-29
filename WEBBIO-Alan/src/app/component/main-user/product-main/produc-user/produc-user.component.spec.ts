import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducUserComponent } from './produc-user.component';

describe('ProducUserComponent', () => {
  let component: ProducUserComponent;
  let fixture: ComponentFixture<ProducUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
