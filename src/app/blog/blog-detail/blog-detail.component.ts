import {Component, Input, OnInit} from '@angular/core';
import {BlogEntry} from "../blog-entry";
import {BlogService} from "../blog.service";
import { ActivatedRoute } from '@angular/router';
import {CommentService} from "./blog-comment/comment.service";
import {Comment} from "./blog-comment/comment";

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.less']
})
export class BlogDetailComponent implements OnInit {
  blog!: BlogEntry;

  constructor(private bs: BlogService,
              private route: ActivatedRoute,
              private cs: CommentService
  ) { }

  ngOnInit(): void {
    const idFromParams = this.route.snapshot.paramMap.get('id');
    if (idFromParams) {
      const singleEntry = this.bs.getSingleEntry(+idFromParams);
      if (singleEntry){
        this.blog = singleEntry;
      }
    }
  }

  addNewComment(commentToAdd: Comment){
    this.cs.addNewComment(commentToAdd);
  }
}
