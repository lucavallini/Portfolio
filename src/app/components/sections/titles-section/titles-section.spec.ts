import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesSection } from './titles-section';

describe('TitlesSection', () => {
  let component: TitlesSection;
  let fixture: ComponentFixture<TitlesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitlesSection],
    }).compileComponents();

    fixture = TestBed.createComponent(TitlesSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
