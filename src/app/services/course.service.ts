import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CourseModel} from "../models/course.model";

const baseUrl = 'http://localhost:8080/api/courses';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(baseUrl);
  }

  getCourseByCourseCode(courseCode: string): Observable<CourseModel> {
    return this.http.get<CourseModel>(`${baseUrl}/${courseCode}`);
  }

  createCourse(data: any): Observable<any> {
    return this.http.post(baseUrl, data, { responseType: 'text' });
  }


  updateCourse(data: any, courseCode:string): Observable<any> {

    return this.http.put(`${baseUrl}/${courseCode}`,data, { responseType: 'text' });
  }

  deleteCourse(courseCode:string): Observable<any> {

    return this.http.delete(`${baseUrl}/${courseCode}`);
  }
}
