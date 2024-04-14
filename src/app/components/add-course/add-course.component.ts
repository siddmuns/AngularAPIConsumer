//Munsif Siddiqui
//991680159
import {Component} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {NgIf} from "@angular/common";
import {CourseModel} from "../../models/course.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})

export class AddCourseComponent {
  newCourse: CourseModel = new CourseModel(); // Assuming you have a class for CourseModel

  constructor(private courseService: CourseService) {}

  addCourse() {
    this.courseService.createCourse(this.newCourse).subscribe({
      next: (data) => {
        console.log(data);
        alert('Course Added Successfully!');
        this.newCourse = new CourseModel(); // Reset the model to clear the form
      },
      error: (e) => {
        console.error(e);
        alert('Failed To Add Course');
      }
    });
  }
}
