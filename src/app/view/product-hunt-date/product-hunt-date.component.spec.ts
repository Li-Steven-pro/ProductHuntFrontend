import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHuntDateComponent } from './product-hunt-date.component';

describe('ProductHuntDateComponent', () => {
  let component: ProductHuntDateComponent;
  let fixture: ComponentFixture<ProductHuntDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductHuntDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHuntDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
