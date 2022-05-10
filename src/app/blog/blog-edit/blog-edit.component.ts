import { Component, OnInit } from '@angular/core';
import {BlogEntry} from "../blog-entry";
import {ActivatedRoute, Router} from "@angular/router";
import {BlogService} from "../blog.service";

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.less']
})
export class BlogEditComponent implements OnInit {
  password: boolean = false;
  showValidation: boolean = true;

  constructor(private bs: BlogService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addNewBlog(newBlog: BlogEntry){
    this.bs.addNewBlog(newBlog);
    this.router.navigate(['/blog'])
  }

  updateBlog(blogToUpdate: BlogEntry){
    this.bs.updateBlog(blogToUpdate);
    this.router.navigate(['/blog'])
  }

  checkPassword(password: string){
    if (password === 'apple'){
      this.password = true;
      this.showValidation = false;
    }else {
      window.alert('password is not correct');
    }
  }
}
