import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {BlogService} from "../blog.service";
import {DatePipe} from "@angular/common";
import {BlogEntry} from "../blog-entry";
import {NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.less']
})
export class BlogFormComponent implements OnInit {
  @Output() submitBlog = new EventEmitter<BlogEntry>();
  @Output() updateBlog = new EventEmitter<BlogEntry>();
  newBlog!: BlogEntry;
  updatedBlog!: BlogEntry;
  @ViewChild('blogForm') blogForm! : NgForm;
  blogIDInURL: string | undefined;
  @Input() blogToEdit!: BlogEntry;

  formData: BlogEntry = {
    title: '',
    description: '',
    author: '',
    text: '',
    date: '',
    image: '',
    id: (this.bs.getLatestEntry().id + 1)
  };

  constructor(private bs: BlogService, private datePipe: DatePipe, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.blogIDInURL = this.route.snapshot.params['id'];
    if (this.blogIDInURL){
      this.formData = this.bs.getSingleEntry(+this.blogIDInURL) ?? this.formData;
    }
  }

  submitForm() {
    if (this.route.snapshot.params['id']){
      this.updatedBlog = this.formData;
      this.updateBlog.emit(this.updatedBlog);
    }else{
      this.newBlog = this.formData;
      this.submitBlog.emit(this.newBlog);
    }
  }
}
