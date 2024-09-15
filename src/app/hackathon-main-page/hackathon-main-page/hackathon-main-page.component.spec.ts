import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonMainPageComponent } from './hackathon-main-page.component';

describe('HackathonMainPageComponent', () => {
  let component: HackathonMainPageComponent;
  let fixture: ComponentFixture<HackathonMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackathonMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
