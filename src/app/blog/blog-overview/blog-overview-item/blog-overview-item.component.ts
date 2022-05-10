import {Component, Input, OnInit} from '@angular/core';
import {BlogEntry} from "../../blog-entry";
import {BlogService} from "../../blog.service";

@Component({
  selector: 'app-blog-overview-item',
  templateUrl: './blog-overview-item.component.html',
  styleUrls: ['./blog-overview-item.component.less']
})
export class BlogOverviewItemComponent implements OnInit {
  @Input() blog!: BlogEntry;

  constructor(private bs: BlogService) {
  }

  ngOnInit(): void {
  }
}
