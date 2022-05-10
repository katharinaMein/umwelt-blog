import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog/blog.service";
import {BlogEntry} from "../blog/blog-entry";

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.less']
})
export class LatestComponent implements OnInit {
  latestBlogs!: BlogEntry[];

  constructor(private bs: BlogService) { }

  ngOnInit(): void {
    this.latestBlogs = this.bs.getLastTwoBlogs();
  }




}
