import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSummarizationDialogComponent } from './text-summarization-dialog.component';

describe('TextSummarizationDialogComponent', () => {
  let component: TextSummarizationDialogComponent;
  let fixture: ComponentFixture<TextSummarizationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextSummarizationDialogComponent]
    });
    fixture = TestBed.createComponent(TextSummarizationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
