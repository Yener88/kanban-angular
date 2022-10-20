import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPolicyComponent } from './f-policy.component';

describe('FPolicyComponent', () => {
  let component: FPolicyComponent;
  let fixture: ComponentFixture<FPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
