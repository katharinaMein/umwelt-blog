import { Component, OnInit } from '@angular/core';
import {BlogEntry} from "../blog-entry";
import {BlogService} from "../blog.service";

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.less']
})
export class BlogOverviewComponent implements OnInit {
  blogs: BlogEntry[] = [];
  firstBlog!: BlogEntry;

  constructor(private bs: BlogService ) { }

  ngOnInit(): void {
    this.blogs = this.bs.getAllEntries();
    this.firstBlog = this.bs.getLatestEntry();
  }
}
