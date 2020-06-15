import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateParentPrimePage } from './create-parent-prime.page';

describe('CreateParentPrimePage', () => {
  let component: CreateParentPrimePage;
  let fixture: ComponentFixture<CreateParentPrimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateParentPrimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateParentPrimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
