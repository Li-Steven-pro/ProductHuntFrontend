import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from 'src/app/service/api/api.service';

import { ProductHuntDateComponent } from './product-hunt-date.component';

describe('ProductHuntDateComponent', () => {
  let component: ProductHuntDateComponent;
  let fixture: ComponentFixture<ProductHuntDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductHuntDateComponent ],
        imports: [HttpClientModule],
        providers : [ApiService]
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
