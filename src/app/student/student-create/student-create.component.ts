import { Component } from '@angular/core';
import {Student} from "../../models/student.model";
import {StudentService} from "../../services/student.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent {
  student: Student = new Student();
  isLoading: boolean = false;
  constructor(
    private studentService: StudentService,
    private toastr: ToastrService,
  ) {

  }

  onSubmit(form: any) {
    this.isLoading = true;
    this.studentService.createStudent(this.student).subscribe(
      (data: any) => {
        this.toastr.success('Saved successfully', 'Success');
        this.student = new Student();
        form.resetForm();
        this.isLoading = false;
      },
      (err: any) => {
        console.log(err);
        this.toastr.error('Something went wrong', 'Error');
        this.isLoading = false;
      },
    );
  }
}


