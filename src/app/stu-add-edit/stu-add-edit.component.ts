import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-stu-add-edit',
  templateUrl: './stu-add-edit.component.html',
  styleUrl: './stu-add-edit.component.scss',
})
export class StuAddEditComponent {
  stuForm: FormGroup;

  level: string[] = [
    'Non précisé',
    'Licence 1',
    'Licence 2',
    'Licence 3',
    'Master 1',
    'Master 2',
  ];

  constructor(
    private _fb: FormBuilder,
    private _studentService: StudentService,
    private _dialogRef: MatDialogRef<StuAddEditComponent>
  ) {
    this.stuForm = this._fb.group({
      lastname: '',
      firstname: '',
      birthdate: '',
      email: '',
      sexe: '',
      level: '',
      numMatricule: '',
      adress: '',
    });
  }

  onFormSubmit() {
    if (this.stuForm.valid) {
      console.log(this.stuForm.value);
      console.log('Form Submitted!');
      this._studentService.addStudent(this.stuForm.value).subscribe({
        next: (data: any) => {
          alert('Student added successfully');
          this._dialogRef.close();
        },
        error: (error: any) => {
          console.error('There was an error!', error);
        },
      });
    }
  }
}
