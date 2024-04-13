import { Routes } from '@angular/router';
import {CourseListComponent} from "./components/course-list/course-list.component";
import {CourseDetailsComponent} from "./components/course-details/course-details.component";
import {AddCourseComponent} from "./components/add-course/add-course.component";
import {EditCourseComponent} from "./components/edit-course/edit-course.component";
import {DeleteCourseComponent} from "./components/delete-course/delete-course.component";

export const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  { path: 'addcourse', component: AddCourseComponent },
  { path: 'deletecourse/:id', component: DeleteCourseComponent },
  { path: 'editcourse/:id/edit', component: EditCourseComponent }
];
