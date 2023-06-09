import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEnterprisesComponent } from './listar.component';

describe('ListarComponent', () => {
  let component: ListarEnterprisesComponent;
  let fixture: ComponentFixture<ListarEnterprisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEnterprisesComponent]
    });
    fixture = TestBed.createComponent(ListarEnterprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
