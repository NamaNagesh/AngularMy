import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTemplatesComponent } from './products-templates.component';

describe('ProductsTemplatesComponent', () => {
  let component: ProductsTemplatesComponent;
  let fixture: ComponentFixture<ProductsTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
