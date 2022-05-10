import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogOverviewComponent} from "./blog-overview/blog-overview.component";
import {BlogDetailComponent} from "./blog-detail/blog-detail.component";
import {BlogEditComponent} from "./blog-edit/blog-edit.component";

const routes: Routes = [
  { path: '', component: BlogOverviewComponent, pathMatch: 'full'},
  { path: 'edit', component: BlogEditComponent},
  { path: ':id', component: BlogDetailComponent},
  { path: ':id/edit', component: BlogEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
