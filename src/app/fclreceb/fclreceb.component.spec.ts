import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FclrecebComponent } from './fclreceb.component';

describe('FclrecebComponent', () => {
  let component: FclrecebComponent;
  let fixture: ComponentFixture<FclrecebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FclrecebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FclrecebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
