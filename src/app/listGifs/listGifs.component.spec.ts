import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGifsComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListGifsComponent;
  let fixture: ComponentFixture<ListGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGifsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
