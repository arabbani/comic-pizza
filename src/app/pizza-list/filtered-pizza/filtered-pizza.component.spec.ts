import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredPizzaComponent } from './filtered-pizza.component';

describe('FilteredPizzaComponent', () => {
  let component: FilteredPizzaComponent;
  let fixture: ComponentFixture<FilteredPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
