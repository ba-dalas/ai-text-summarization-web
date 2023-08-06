import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-summarization',
  templateUrl: './text-summarization.component.html',
  styleUrls: ['./text-summarization.component.scss']
})
export class TextSummarizationComponent  implements OnChanges, OnInit {

  form!: FormGroup;
  file! : File | null

  @Output() onOpenDialog = new EventEmitter<any>();
  @Output() fileEmitter = new EventEmitter<File>();

  constructor(
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();

  }

    ngOnChanges(changes: SimpleChanges): void {

    }

    createForm() {
      this.form = this.fb.group({
        textDescription: [''],

      })
    }

    openDialog(){
      this.onOpenDialog.emit();
  }

  onFileSelected(event: any) {
    // console.log(event.target.files[0]);
    this.file = event.target.files[0];
    if (this.file) {
      this.fileEmitter.emit(this.file);
    }
  }



}
