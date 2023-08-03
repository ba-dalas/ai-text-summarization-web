import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-summarization-dialog',
  templateUrl: './text-summarization-dialog.component.html',
  styleUrls: ['./text-summarization-dialog.component.scss']
})
export class TextSummarizationDialogComponent {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();

  }

  createForm() {
    this.form = this.fb.group({
      minLength: [''],
       maxLength: [''],

    })
  }


}
