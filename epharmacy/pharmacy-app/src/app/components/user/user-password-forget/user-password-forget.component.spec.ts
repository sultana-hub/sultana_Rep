import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPasswordForgetComponent } from './user-password-forget.component';

describe('UserPasswordForgetComponent', () => {
  let component: UserPasswordForgetComponent;
  let fixture: ComponentFixture<UserPasswordForgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPasswordForgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPasswordForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
