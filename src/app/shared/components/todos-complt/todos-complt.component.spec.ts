import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosCompltComponent } from './todos-complt.component';

describe('TodosCompltComponent', () => {
  let component: TodosCompltComponent;
  let fixture: ComponentFixture<TodosCompltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosCompltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosCompltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
