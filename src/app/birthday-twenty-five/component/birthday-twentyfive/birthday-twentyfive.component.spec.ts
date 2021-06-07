import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayTwentyfiveComponent } from './birthday-twentyfive.component';

describe('BirthdayTwentyfiveComponent', () => {
  let component: BirthdayTwentyfiveComponent;
  let fixture: ComponentFixture<BirthdayTwentyfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayTwentyfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayTwentyfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
