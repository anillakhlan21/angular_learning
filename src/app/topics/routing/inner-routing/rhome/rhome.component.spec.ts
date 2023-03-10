import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RHomeComponent } from './rhome.component';

describe('RHomeComponent', () => {
  let component: RHomeComponent;
  let fixture: ComponentFixture<RHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
