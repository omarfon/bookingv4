import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserprefComponent } from './userpref.component';

describe('UserprefComponent', () => {
  let component: UserprefComponent;
  let fixture: ComponentFixture<UserprefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserprefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
