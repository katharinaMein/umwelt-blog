import {Injectable} from '@angular/core';
import {BlogEntry} from "./blog-entry";
import {blogInitialData} from "./data/blog-data";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  idUpdatedBlog!: number;
  updatedBlog: BlogEntry | undefined;

  constructor() {
  }

  blogs: BlogEntry[] = this.getDataFromLocalStorage() ?? blogInitialData;

  getAllEntries() {
    return this.blogs;
  }

  getLatestEntry() {
    return this.blogs[0];
  }

  getSingleEntry(id: number | null): BlogEntry | undefined{
    return this.blogs.find(x => x.id === id);
  }

  getLastTwoBlogs(){
    return this.blogs.slice(0, 2);
  }

  addNewBlog(newBlog: BlogEntry): void{
    this.blogs = [{...newBlog}, ...this.blogs];
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
  }

  updateBlog(blogToUpdate: BlogEntry): void{
    this.idUpdatedBlog = blogToUpdate.id;
    this.updatedBlog = this.blogs.find(blog => blog.id === this.idUpdatedBlog);
    this.updatedBlog = blogToUpdate;
  }

  private getDataFromLocalStorage() {
    const data = localStorage.getItem('blogs');
    if (data) {
      return JSON.parse(data) as BlogEntry[];
    }
    return undefined;
  }
}
