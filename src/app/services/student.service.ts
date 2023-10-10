import { Injectable } from '@angular/core';
import {Student} from "../models/student.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = `${environment.apiUrl}/students`;
  constructor(
    private http: HttpClient
  ) { }

  createStudent(student: Student): Observable<any> {
    return this.http.post(this.apiUrl, student);
  }
}
