//Munsif Siddiqui
//991680159
import {Component, OnInit} from '@angular/core';
import {CourseModel} from "../../models/course.model";
import {CourseService} from "../../services/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-edit-course',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})

export class EditCourseComponent implements OnInit {
  course?: CourseModel;
  allowEdit?: string;

  constructor(private courseService: CourseService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCourse(this.route.snapshot.params['courseCode']);

    this.route.queryParams.subscribe(params=>{
      this.allowEdit = params['allowEdit'];
      console.log("AllowEdit = " + this.allowEdit);
    });
  }

  getCourse(courseCode: string) {
    this.courseService.getCourseByCourseCode(courseCode)
      .subscribe({
        next: (data) => {
          this.course = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateCourse() {
    if (this.allowEdit === '1' && this.course?.courseCode) {
      this.courseService.updateCourse(this.course, this.course?.courseCode).subscribe({
        next: (response) => {
          console.log(response);
          alert('Course Edited Successfully!');
        },
        error: (e) => {
          console.error(e);
          alert('Failed To Edit Course.');
        }
      });
    }
  }
}
