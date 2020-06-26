import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaitingVideoPage } from './waiting-video.page';

describe('WaitingVideoPage', () => {
  let component: WaitingVideoPage;
  let fixture: ComponentFixture<WaitingVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaitingVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
