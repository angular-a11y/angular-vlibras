import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleVlibras } from './example.component';

describe('ExampleVlibras', () => {
  let component: ExampleVlibras;
  let fixture: ComponentFixture<ExampleVlibras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleVlibras],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleVlibras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
