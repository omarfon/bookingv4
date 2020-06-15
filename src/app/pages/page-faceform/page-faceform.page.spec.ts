import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageFaceformPage } from './page-faceform.page';

describe('PageFaceformPage', () => {
  let component: PageFaceformPage;
  let fixture: ComponentFixture<PageFaceformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFaceformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageFaceformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
