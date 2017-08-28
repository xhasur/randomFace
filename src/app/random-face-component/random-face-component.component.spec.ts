import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomFaceComponentComponent } from './random-face-component.component';

describe('RandomFaceComponentComponent', () => {
  let component: RandomFaceComponentComponent;
  let fixture: ComponentFixture<RandomFaceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomFaceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomFaceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
