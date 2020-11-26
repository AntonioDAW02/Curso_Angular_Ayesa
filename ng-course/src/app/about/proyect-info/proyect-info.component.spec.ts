import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectInfoComponent } from './proyect-info.component';

describe('ProyectInfoComponent', () => {
  let component: ProyectInfoComponent;
  let fixture: ComponentFixture<ProyectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
