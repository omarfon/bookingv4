import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeleconPage } from './telecon.page';

describe('TeleconPage', () => {
  let component: TeleconPage;
  let fixture: ComponentFixture<TeleconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeleconPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeleconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
