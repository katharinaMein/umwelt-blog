import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEditValidationComponent } from './blog-edit-validation.component';

describe('BlogEditValidationComponent', () => {
  let component: BlogEditValidationComponent;
  let fixture: ComponentFixture<BlogEditValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogEditValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEditValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
