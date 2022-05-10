import {Component, Input, OnInit} from '@angular/core';
import {BlogEntry} from "../../blog-entry";

@Component({
  selector: 'app-blog-overview-item-large',
  templateUrl: './blog-overview-item-large.component.html',
  styleUrls: ['./blog-overview-item-large.component.less']
})
export class BlogOverviewItemLargeComponent implements OnInit {
  @Input() firstBlog!: BlogEntry;

  constructor() { }

  ngOnInit(): void {
  }

}
