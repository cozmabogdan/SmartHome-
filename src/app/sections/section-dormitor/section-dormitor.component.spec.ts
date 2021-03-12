import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDormitorComponent } from './section-dormitor.component';

describe('SectionDormitorComponent', () => {
  let component: SectionDormitorComponent;
  let fixture: ComponentFixture<SectionDormitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDormitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDormitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
