import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyDatePage } from './my-date.page';

describe('MyDatePage', () => {
  let component: MyDatePage;
  let fixture: ComponentFixture<MyDatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
