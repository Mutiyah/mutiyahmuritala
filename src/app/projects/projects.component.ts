import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
project1 : string = "assets/images/project1.jpeg";
project2: string = "assets/images/project2.jpeg";
project3: string = "assets/images/project3.jpeg";
  constructor() { }

  ngOnInit(): void {
  }

}
