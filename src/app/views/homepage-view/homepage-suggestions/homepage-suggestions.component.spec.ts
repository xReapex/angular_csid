import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSuggestionsComponent } from './homepage-suggestions.component';

describe('HomepageSuggestionsComponent', () => {
  let component: HomepageSuggestionsComponent;
  let fixture: ComponentFixture<HomepageSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageSuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
