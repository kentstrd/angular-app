import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpServiceService {
  constructor(private http: HttpClient) {}

  // getProjects() {
  //   this.http
  //     .get<{ message: string; project: any }>('http://localhost:3000/api/project')
  //     .subscribe(project => {
  //       this.projects = project.project;
  //       this.projectUpdated.next([...this.projects]);
  //     });
  // }
}
