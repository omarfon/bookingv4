import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyparentsPage } from './myparents.page';

describe('MyparentsPage', () => {
  let component: MyparentsPage;
  let fixture: ComponentFixture<MyparentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyparentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyparentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
