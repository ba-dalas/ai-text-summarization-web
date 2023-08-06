import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-text-summarization-dialog',
  templateUrl: './text-summarization-dialog.component.html',
  styleUrls: ['./text-summarization-dialog.component.scss']
})
export class TextSummarizationDialogComponent {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<TextSummarizationDialogComponent>,
    ) { }

  ngOnInit(): void {
    this.createForm();

  }

  createForm() {
    this.form = this.fb.group({
      minLength: [''],
      maxLength: [''],

    })
  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  get minLength(){
    return this.form.get('minLength');
  }



  get maxLength(){
    return this.form.get('maxLength');
  }


}
