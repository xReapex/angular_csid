import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertNavbarComponent } from './vert-navbar.component';

describe('VertNavbarComponent', () => {
  let component: VertNavbarComponent;
  let fixture: ComponentFixture<VertNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VertNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
