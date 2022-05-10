import { Injectable } from '@angular/core';
import {Comment} from "./comment";
import {CommentsInitialData} from "./data/comment-data";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  comments: Comment[] = this.getCommentsFromLocalStorage() ?? CommentsInitialData;

  constructor() { }

  getComments(ID: string): Comment[]{
    return this.comments.filter(comment => comment.blogID === ID)!;
  }

  getCommentsFromLocalStorage(){
    const data = localStorage.getItem('comment');
    if (data) {
      return JSON.parse(data) as Comment[];
    }
    return undefined;
  }

  addNewComment(newComment: Comment): void{
    this.comments = [{...newComment}, ...this.comments];
    localStorage.setItem('comment', JSON.stringify(this.comments));
  }
}
