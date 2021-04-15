import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private _http: HttpClient) { }

  getCourses(params?) {
    return this._http.get(`${environment.baseUrl}/courses`, { params });
  }

  getCourseById(id) {
    return this._http.get(`${environment.baseUrl}/courses/${id}`);
  }

  addCourse(course) {
    return this._http.post(`${environment.baseUrl}/courses`, course);
  }

  deleteCourse(id) {
    return this._http.delete(`${environment.baseUrl}/courses/${id}`);
  }

  updateCourse(id, course) {
    return this._http.put(`${environment.baseUrl}/courses/${id}`, course);
  }

}
