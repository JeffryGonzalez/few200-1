import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPastComponent } from './list-past.component';

describe('ListPastComponent', () => {
  let component: ListPastComponent;
  let fixture: ComponentFixture<ListPastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
