import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastMyComponent } from './toast-my.component';

describe('ToastMyComponent', () => {
  let component: ToastMyComponent;
  let fixture: ComponentFixture<ToastMyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastMyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
