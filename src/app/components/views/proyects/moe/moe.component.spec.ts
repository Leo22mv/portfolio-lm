import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoeComponent } from './moe.component';

describe('MoeComponent', () => {
  let component: MoeComponent;
  let fixture: ComponentFixture<MoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
