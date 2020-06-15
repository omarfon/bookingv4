import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageFormprePage } from './page-formpre.page';

describe('PageFormprePage', () => {
  let component: PageFormprePage;
  let fixture: ComponentFixture<PageFormprePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFormprePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageFormprePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
