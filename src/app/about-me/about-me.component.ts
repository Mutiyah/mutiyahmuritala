import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
// myImage : string = "assets/images/myPicture.jpg";
myImage : string = "assets/images/mine.jpg";

  constructor() { }

  ngOnInit(): void {
  }


}
