import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockselectorComponent } from './blockselector.component';

describe('BlockselectorComponent', () => {
  let component: BlockselectorComponent;
  let fixture: ComponentFixture<BlockselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockselectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
