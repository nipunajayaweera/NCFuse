import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionContainComponent } from './question-contain.component';

describe('QuestionContainComponent', () => {
  let component: QuestionContainComponent;
  let fixture: ComponentFixture<QuestionContainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionContainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionContainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
