//Munsif Siddiqui
//991680159
import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CourseService} from "../../services/course.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-delete-course',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './delete-course.component.html',
  styleUrl: './delete-course.component.css'
})

export class DeleteCourseComponent implements OnInit {
  courseCode: string = '';

  constructor(private courseService: CourseService, private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.courseCode = this.route.snapshot.params['courseCode'];
  }

  deleteCourse() {
    if (this.courseCode) {
      this.courseService.deleteCourse(this.courseCode).subscribe({
        next: (data) => {
          console.log(data)
          alert('Course Deleted Successfully!');
        },
        error: (error) => {
          console.error(error);
          alert('Failed To Delete Course');
        }
      });
    } else {
      alert('No Course Code Provided');
    }
  }
}
