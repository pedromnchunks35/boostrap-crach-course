import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowAndColExampleComponent } from './row-and-col-example.component';

describe('RowAndColExampleComponent', () => {
  let component: RowAndColExampleComponent;
  let fixture: ComponentFixture<RowAndColExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowAndColExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowAndColExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
