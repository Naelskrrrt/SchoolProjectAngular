import { Component } from '@angular/core';
import { StuAddEditComponent } from './stu-add-edit/stu-add-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RealSchoolProject';

  constructor(private _dialog: MatDialog) {
    console.log('App component loaded');
  }

  openAddEditDialog() {
    this._dialog.open(StuAddEditComponent);
  }

}
