import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChargePage } from './charge.page';

describe('ChargePage', () => {
  let component: ChargePage;
  let fixture: ComponentFixture<ChargePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChargePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
