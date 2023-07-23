import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SddTodoComponent } from './sdd-todo.component';

describe('SddTodoComponent', () => {
  let component: SddTodoComponent;
  let fixture: ComponentFixture<SddTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SddTodoComponent]
    });
    fixture = TestBed.createComponent(SddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
