import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductTemplateDialogComponent } from './add-product-template-dialog.component';

describe('AddProductTemplateDialogComponent', () => {
  let component: AddProductTemplateDialogComponent;
  let fixture: ComponentFixture<AddProductTemplateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductTemplateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductTemplateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
