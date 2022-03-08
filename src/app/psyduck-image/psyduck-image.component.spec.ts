import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsyduckImageComponent } from './psyduck-image.component';

describe('PsyduckImageComponent', () => {
  let component: PsyduckImageComponent;
  let fixture: ComponentFixture<PsyduckImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsyduckImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsyduckImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
