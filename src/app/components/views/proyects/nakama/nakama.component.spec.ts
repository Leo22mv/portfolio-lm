import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NakamaComponent } from './nakama.component';

describe('NakamaComponent', () => {
  let component: NakamaComponent;
  let fixture: ComponentFixture<NakamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NakamaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NakamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
