import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogInfoComponent } from './blog-info/blog-info.component';
import { AboutComponent } from './about/about.component';
import { TeaserComponent } from './teaser/teaser.component';
import { HomeComponent } from './home/home.component';
import { LatestComponent } from './latest/latest.component';
import {CoreModule} from "./core/core.module";
import {BlogModule} from "./blog/blog.module";
import {SharedModule} from "./shared/shared.module";
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {LOCALE_ID} from "@angular/core";

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    BlogInfoComponent,
    AboutComponent,
    TeaserComponent,
    HomeComponent,
    LatestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BlogModule,
    SharedModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'de'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
