import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconbarComponent } from './iconbar.component';

describe('IconbarComponent', () => {
  let component: IconbarComponent;
  let fixture: ComponentFixture<IconbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
