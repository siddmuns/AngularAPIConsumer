import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CourseService} from "../../services/course.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})

export class AddCourseComponent implements OnInit {
  addCourseForm: FormGroup;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.addCourseForm = new FormGroup({
      'courseName': new FormControl(null, Validators.required),
      'courseCode': new FormControl(null, Validators.required),
      'courseCredit': new FormControl(null, Validators.required),
      'edit': new FormControl('false', Validators.required)
    });
  }

  onSubmit() {
    if (this.addCourseForm.valid) {
      this.courseService.createCourse(this.addCourseForm.value).subscribe({
        next: (response) => {
          alert('Course added successfully! URL: ' + response);
          this.addCourseForm.reset(); // Reset the form after successful submission
        },
        error: (error) => {
          alert('Failed to add course.');
          console.error(error);
        }
      });
    } else {
      alert('Please fill all fields correctly.'); // Alert if form is invalid
    }
  }

}
