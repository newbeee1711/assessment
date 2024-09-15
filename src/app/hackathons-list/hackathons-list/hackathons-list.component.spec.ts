import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonsListComponent } from './hackathons-list.component';

describe('HackathonsListComponent', () => {
  let component: HackathonsListComponent;
  let fixture: ComponentFixture<HackathonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackathonsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
