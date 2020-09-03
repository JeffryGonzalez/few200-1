import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUpcomingComponent } from './list-upcoming.component';

describe('ListUpcomingComponent', () => {
  let component: ListUpcomingComponent;
  let fixture: ComponentFixture<ListUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
