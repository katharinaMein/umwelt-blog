import { Component, OnInit } from '@angular/core';
import {BlogEntry} from "../blog/blog-entry";
import {BlogService} from "../blog/blog.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  LastTwoBlogs: BlogEntry[] = [];

  constructor(private bs: BlogService) { }

  ngOnInit(): void {
    this.LastTwoBlogs = this.bs.getLastTwoBlogs();
  }

}
