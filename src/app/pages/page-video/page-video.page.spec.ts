import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageVideoPage } from './page-video.page';

describe('PageVideoPage', () => {
  let component: PageVideoPage;
  let fixture: ComponentFixture<PageVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
