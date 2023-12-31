import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TextSummarizationDialogComponent } from '../text-summarization-dialog/text-summarization-dialog.component';

@Component({
  selector: 'app-text-summarization-shell',
  templateUrl: './text-summarization-shell.component.html',
  styleUrls: ['./text-summarization-shell.component.scss']
})
export class TextSummarizationShellComponent {
  selectedFile !: File;
  isLoading = false;


  constructor(public dialog: MatDialog) {}



  getFileEmitter(event: any){
    this.selectedFile = event;
    let formData = new FormData();
    formData.append("file", this.selectedFile);
    this.isLoading = true;
    setTimeout( () => this.isLoading = false, 2000 );

  }


  openDialog(event:any){
      const dialogRef = this.dialog.open(TextSummarizationDialogComponent, {
        height: '400px',
        width: '600px',
        // data: ,
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed' , result);

      });

  }


  // load() : void {
  //   this.isLoading = true;
  //   setTimeout( () => this.isLoading = false, 2000 );
  // }

}
