import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSufragerieComponent } from './section-sufragerie.component';

describe('SectionSufragerieComponent', () => {
  let component: SectionSufragerieComponent;
  let fixture: ComponentFixture<SectionSufragerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSufragerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSufragerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
