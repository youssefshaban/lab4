import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesService } from './services/courses.service';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseReactiveFormComponent } from './course-reactive-form/course-reactive-form.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    CourseFormComponent,
    CourseItemComponent,
    CourseReactiveFormComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // providers: [CoursesService]
})
export class CoursesModule { }
