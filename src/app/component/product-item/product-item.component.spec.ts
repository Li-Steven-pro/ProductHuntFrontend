import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.post = {
      "name": "Everyday 2.0",
      "tagline": "Simple & beautiful habit tracker for the Web, iOS & Android",
      "topics": [
          {
              "name": "Android"
          },
          {
              "name": "iPhone"
          },
          {
              "name": "Apple Watch"
          },
          {
              "name": "Mac"
          },
          {
              "name": "Web App"
          },
          {
              "name": "Health and Fitness"
          },
          {
              "name": "Quantified Self"
          }
      ],
      "redirect_link": "https://www.producthunt.com/r/f8002d7c07760c/295780?app_id=47271",
      "thumbnail": "https://ph-files.imgix.net/748783c9-4cb4-467b-b74c-365b0661e6c0.gif?auto=format&fit=crop&h=570&w=430",
  }
    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
});
