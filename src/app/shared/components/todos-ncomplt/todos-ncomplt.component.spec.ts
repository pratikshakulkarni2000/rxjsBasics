import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosNCompltComponent } from './todos-ncomplt.component';

describe('TodosNCompltComponent', () => {
  let component: TodosNCompltComponent;
  let fixture: ComponentFixture<TodosNCompltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosNCompltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosNCompltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
