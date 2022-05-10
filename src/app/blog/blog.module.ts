import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogOverviewComponent } from './blog-overview/blog-overview.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogOverviewItemComponent } from './blog-overview/blog-overview-item/blog-overview-item.component';
import { FormsModule } from "@angular/forms";
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogEditValidationComponent } from './blog-edit/blog-edit-validation/blog-edit-validation.component';
import { BlogOverviewItemLargeComponent } from './blog-overview/blog-overview-item-large/blog-overview-item-large.component';
import { BlogCommentComponent } from './blog-detail/blog-comment/blog-comment.component';


@NgModule({
  declarations: [
    BlogOverviewComponent,
    BlogDetailComponent,
    BlogOverviewItemComponent,
    BlogFormComponent,
    BlogEditComponent,
    BlogEditValidationComponent,
    BlogOverviewItemLargeComponent,
    BlogCommentComponent
  ],
  exports: [
    BlogDetailComponent,
    BlogOverviewItemComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule
  ],
  providers: [
    DatePipe
  ]
})
export class BlogModule { }
