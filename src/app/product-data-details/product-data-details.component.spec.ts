import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDataDetailsComponent } from './product-data-details.component';

describe('ProductDataDetailsComponent', () => {
  let component: ProductDataDetailsComponent;
  let fixture: ComponentFixture<ProductDataDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDataDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
