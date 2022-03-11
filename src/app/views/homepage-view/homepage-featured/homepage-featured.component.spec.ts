import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageFeaturedComponent } from './homepage-featured.component';

describe('HomepageFeaturedComponent', () => {
  let component: HomepageFeaturedComponent;
  let fixture: ComponentFixture<HomepageFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageFeaturedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
