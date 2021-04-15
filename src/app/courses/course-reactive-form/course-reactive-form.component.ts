import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-reactive-form',
  templateUrl: './course-reactive-form.component.html',
  styleUrls: ['./course-reactive-form.component.scss']
})
export class CourseReactiveFormComponent implements OnInit {
  errors = [];

  courseForm: FormGroup = this._fb.group({
    title: ['', Validators.required],
    instructor: ['', Validators.required],
    isAvailabel: [false]
  });

  constructor(
    private _fb: FormBuilder,
    private _coursesService: CoursesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      const course = form.value;
      this._coursesService.addCourse(course).subscribe(
        (res: any) => {
          this.errors = [];
          this._router.navigate(['/courses', res.data.id]);
        },
        (err: any) => {
          console.log(err);
          this.errors = err.error.error || [];
        }
      )
    }

  }

}
