import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSummarizationShellComponent } from './text-summarization-shell.component';

describe('TextSummarizationShellComponent', () => {
  let component: TextSummarizationShellComponent;
  let fixture: ComponentFixture<TextSummarizationShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextSummarizationShellComponent]
    });
    fixture = TestBed.createComponent(TextSummarizationShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
