import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardCuidaPage } from './card-cuida.page';

describe('CardCuidaPage', () => {
  let component: CardCuidaPage;
  let fixture: ComponentFixture<CardCuidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCuidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardCuidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
