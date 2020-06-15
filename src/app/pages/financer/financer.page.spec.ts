import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinancerPage } from './financer.page';

describe('FinancerPage', () => {
  let component: FinancerPage;
  let fixture: ComponentFixture<FinancerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinancerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
