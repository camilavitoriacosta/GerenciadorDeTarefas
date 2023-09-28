import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunaComponent } from './coluna.component';

describe('ColunaComponent', () => {
  let component: ColunaComponent;
  let fixture: ComponentFixture<ColunaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColunaComponent]
    });
    fixture = TestBed.createComponent(ColunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
