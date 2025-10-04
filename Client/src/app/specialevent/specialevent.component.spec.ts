import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialeventComponent } from './specialevent.component';

describe('SpecialeventComponent', () => {
  let component: SpecialeventComponent;
  let fixture: ComponentFixture<SpecialeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialeventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
