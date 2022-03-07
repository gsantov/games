import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryScoreComponent } from './memory-score.component';

describe('MemoryScoreComponent', () => {
  let component: MemoryScoreComponent;
  let fixture: ComponentFixture<MemoryScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
