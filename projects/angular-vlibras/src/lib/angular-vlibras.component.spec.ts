import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularVlibrasComponent } from './angular-vlibras.component';

describe('AngularVlibrasComponent', () => {
  let component: AngularVlibrasComponent;
  let fixture: ComponentFixture<AngularVlibrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularVlibrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularVlibrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
