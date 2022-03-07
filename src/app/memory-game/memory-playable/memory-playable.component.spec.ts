import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryPlayableComponent } from './memory-playable.component';

describe('MemoryPlayableComponent', () => {
  let component: MemoryPlayableComponent;
  let fixture: ComponentFixture<MemoryPlayableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryPlayableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryPlayableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
