import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOverviewItemLargeComponent } from './blog-overview-item-large.component';

describe('BlogOverviewItemLargeComponent', () => {
  let component: BlogOverviewItemLargeComponent;
  let fixture: ComponentFixture<BlogOverviewItemLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogOverviewItemLargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOverviewItemLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
