import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {CommentService} from "./comment.service";
import {Comment} from "./comment";
import {NgForm} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog-comment',
  templateUrl: './blog-comment.component.html',
  styleUrls: ['./blog-comment.component.less']
})
export class BlogCommentComponent implements OnInit {
  comments!: Comment[];
  newComment!: Comment;
  @Output() submitComment = new EventEmitter<Comment>();
  @ViewChild('commentForm') commentForm!: NgForm;

  todayDate: string = new Date().toDateString();
  idFromParams: string = this.route.snapshot.paramMap.get('id')!;

  commentData: Comment = {
      name: '',
      comment: '',
      date: this.datePipe.transform(this.todayDate, 'mediumDate')!,
      blogID: this.idFromParams!
  }

  constructor(private cs: CommentService, private datePipe: DatePipe, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.comments = this.cs.getComments(this.idFromParams);
  }

  onSubmitForm(){
    this.newComment = this.commentData;
    this.submitComment.emit(this.newComment);
    this.comments = this.cs.getComments(this.idFromParams);
    this.commentForm.reset();
  }
}
