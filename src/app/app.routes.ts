//Munsif Siddiqui
//991680159
import { Routes } from '@angular/router';
import {CourseListComponent} from "./components/course-list/course-list.component";
import {CourseDetailsComponent} from "./components/course-details/course-details.component";
import {AddCourseComponent} from "./components/add-course/add-course.component";
import {EditCourseComponent} from "./components/edit-course/edit-course.component";
import {DeleteCourseComponent} from "./components/delete-course/delete-course.component";

export const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:courseCode', component: CourseDetailsComponent },
  { path: 'addcourse', component: AddCourseComponent },
  { path: 'deletecourse/:courseCode', component: DeleteCourseComponent },
  { path: 'editcourse/:courseCode/edit', component: EditCourseComponent }
];
