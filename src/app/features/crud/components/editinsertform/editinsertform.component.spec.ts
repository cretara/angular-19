import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinsertformComponent } from './editinsertform.component';

describe('EditinsertformComponent', () => {
  let component: EditinsertformComponent;
  let fixture: ComponentFixture<EditinsertformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditinsertformComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditinsertformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
