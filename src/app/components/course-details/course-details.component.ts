//Munsif Siddiqui
//991680159
import {Component, OnInit} from '@angular/core';
import {CourseModel} from "../../models/course.model";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit{
  course?:CourseModel;
  constructor(private studentService:CourseService, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getCourseByCourseCode(this.route.snapshot.params['courseCode']);
  }

  getCourseByCourseCode(courseCode: string): void {
    this.studentService.getCourseByCourseCode(courseCode)
      .subscribe({
        next: (data: CourseModel)=> {
          this.course = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
